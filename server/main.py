from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_socketio import SocketIO, emit, join_room, leave_room
#from deepface import DeepFace
from datetime import datetime
from supabase import create_client, Client


# Normal Flask setup
app = Flask(__name__)
CORS(app, origins=["http://localhost:5174"])

# SocketIO setup
socketio = SocketIO(app, cors_allowed_origins="*")

# In-memory chat history { room_name: [ {user, message, time}, ... ] }
chat_history = {}

# Supabase config
SUPABASE_URL = "https://wkowxfqztitqqxzpfoqu.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indrb3d4ZnF6dGl0cXF4enBmb3F1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE2MzY3MjAsImV4cCI6MjA2NzIxMjcyMH0.Q7tt2oiyeWuaQBcIfa7KglAjM_3v01zRj3Ap3LrlPPk"
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

# === HTTP routes ===
@app.route('/')
def home():
    return jsonify({'message': 'flask is working bruh'})

@app.route('/submit', methods=['POST', 'GET'])
def process_data():
    try:
        if request.method == 'POST':
            body = request.get_json()

            # Insert into Supabase
            response = supabase.table("users").insert({
                "name": body.get("name"),
                "email": body.get("email"),
                "password": body.get("password"),
                "grade": body.get("grade"),
            }).execute()
            print("DEBUG:", response)
            

            return jsonify({"status": "success", "data": response.data}), 201

        # If someone does a GET request (optional handling)
        return jsonify({"status": "ok", "message": "Send a POST request with JSON data"}), 200

    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

@app.route("/login", methods=["POST"])
def login():
    body = request.get_json()
    email = body.get("email")
    password = body.get("password")

    # Get user from Supabase
    response = supabase.table("users").select("*").eq("email", email).execute()

    if len(response.data) == 0:
        return jsonify({"status": "error", "message": "User not found"}), 400

    user = response.data[0]

    
    if user["password"] != password:  
        return jsonify({"status": "error", "message": "Invalid credentials"}), 401


    # Return success
    return jsonify({
        "status": "success",
        "message": "Login successful",
        "user": {"id": user["id"], "name": user["name"], "email": user["email"]}
    }), 200
# === Socket.IO events ===
@socketio.on('join')
def handle_join(data):
    username = data['username']
    room = data['room']
    join_room(room)

    # Send previous messages to the newly joined user
    emit('chat_history', chat_history.get(room, []), to=request.sid)

    # Notify everyone in the room
    emit('system_message', f"{username} has joined the room.", room=room)

@socketio.on('leave')
def handle_leave(data):
    username = data['username']
    room = data['room']
    leave_room(room)
    emit('system_message', f"{username} has left the room.", room=room)

@socketio.on('chat_message')
def handle_chat(data):
    username = data['username']
    room = data['room']
    message = data['message']
    timestamp = datetime.now().strftime('%H:%M:%S')

    # Save to history
    chat_history.setdefault(room, []).append({
        "username": username,
        "message": message,
        "time": timestamp
    })

    # Send message to everyone in the room
    emit('chat_message', {
        "username": username,
        "message": message,
        "time": timestamp
    }, room=room)

@socketio.on("ping")
def ping():
    emit("pong")

# === Optional: Face emotion recognition ===
#def FER():
#    result = DeepFace.analyze(img_path="student.jpg", actions=["emotion"])
#    print(result[0]["emotion"])

# Run everything
if __name__ == '__main__':
    socketio.run(app, debug=True, port=5000)
    