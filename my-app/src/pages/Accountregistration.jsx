import { Link } from "react-router-dom";
import { useState, FormEvent, ChangeEvent } from "react";
import { supabase } from "/src/supabase-client.js"; 

function Registration() {

    const [Account, setAccount] = useState({
        student_name: "",
        email: "",
        password: "",
        grade: "",

    })

    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [grade, setGrade] = useState("");


    const fetchTasks = async () => {
        const { error } = await supabase.from("")
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (isSignUp) {
            const {error} = await supabase.auth.signUp({
                username ,email, password, grade
            }) 
            if (signUpError) {
                console.error("Error signing up:", error.message);
            }
        } else {
            const {error: signInError} = await supabase.auth.signInWithPassword({
                username, password
            })
            if (signInError) {
                console.error("Error signing in:", signInError.message)
                return 
            }
        }
        
    };

    return(
        <>
            <div class="registration h-screen w-screen bg-green-200">
                <form onSubmit={handleSubmit} class="h-[800px] w-[500px] bg-green-100 text-center rounded-2xl p-2 mt-4 ml-[40%] fixed">
                    <label 
                        class="mt-4">
                        Enter your username
                    </label><br></br>
                    <input 
                        type="name" 
                        value={username} 
                        onChange={(e => setUsername(e.target.value))}
                        placeholder="Robert James Rallison" 
                        class="bg-white-100 border-2 border-black rounded-lg p-2 m-2">
                    </input><br></br>
                    <label class="">
                        Enter your email
                    </label><br></br>
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e => setUsername(e.target.value))}
                        placeholder="Kwonhyun@gmail.com" 
                        class="bg-white-100 border-2 border-black rounded-lg p-2 m-2">
                    </input><br></br>
                    <label>
                        Enter your password
                    </label><br></br>
                    <input 
                        type="password" 
                        value={password} 
                        placeholder="Password" 
                        class="bg-white-100 border-2 border-black rounded-lg p-2 m-2">
                    </input><br></br>
                    <label>
                        What's your current grade?
                    </label><br></br>
                    <input 
                        type="number"
                        value={grade}
                        onChange={(e => setGrade(e.target.value))}
                        placeholder="12th Grade"
                        class="bg-white-100 border-2 border-black rounded-lg p-2 m-2">
                    </input>
                    <input 
                        type="submit"
                        class="">
                    </input>
                </form>
                <Link to="/">
                    <div class="w-40 h-20 bg-blue-700/50 text-white text-center rounded-2xl p-6 mt-[500px] ml-[950px] absolute hover:bg-blue-700">
                        Return to landing page
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Registration