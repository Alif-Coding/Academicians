import { Link } from "react-router-dom";

function Registration() {

    

    return(
        <>
            <div class="registration h-screen w-screen bg-green-200">
                <form class="h-[800px] w-[500px] bg-green-100 text-center rounded-2xl p-2 mt-4 ml-[40%] fixed">
                    <label class="mt-4">
                        Enter your username
                    </label><br></br>
                    <input type="name" class="bg-white-100 border-2 border-black rounded-lg p-2 m-2">
                    </input><br></br>
                    <label class="">
                        Enter your email
                    </label><br></br>
                    <input type="email" class="bg-white-100 border-2 border-black rounded-lg p-2 m-2">
                    </input><br></br>
                    <label>
                        Enter your password
                    </label><br></br>
                    <input type="" class="bg-white-100 border-2 border-black rounded-lg p-2 m-2">
                    </input><br></br>
                    <label>
                        What's your current grade?
                    </label><br></br>
                    <input type="number" class="bg-white-100 border-2 border-black rounded-lg p-2 m-2">
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