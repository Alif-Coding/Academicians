from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_socketio import SocketIO, emit
from deepface import DeepFace

# Normal Flask setup
app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"])

# SocketIO setup
socketio = SocketIO(app, cors_allowed_origins="*")

# === Your normal HTTP API routes ===
@app.route('/')
def home():
    return jsonify({'message': 'flask is working bruh'})

@app.route('/process', methods=['POST'])
def process_data():
    body = request.get_json()
    return jsonify({'result': body})

def FER():
    result = DeepFace.analyze(img_path="student.jpg", actions=["emotion"])
    print(result[0]["emotion"])

# === Real-time chat: Socket.IO events ===
@socketio.on('message')
def handle_message(data):
    print('Received message:', data)
    emit('response', data, broadcast=True)

@socketio.on("ping")
def ping():
    emit("pong")

# Run everything
if __name__ == '__main__':
    socketio.run(app, debug=True, port=8000)
