import { Link } from 'react-router-dom'
import { useEffect, useRef } from "react"
import Navbar from '../components/navbar.jsx'

function Landingpage() {

//const boxRef = useRef(null);
    
//useEffect(() => {
//anime({
//      targets: boxRef.current,
//      translateX: 250,
//      duration: 1000,
//      easing: "easeOutQuad"
//    });
//  }, []);

//<div ref={boxRef} style={{ width: 100, height: 100, background: "orange" }} />

    return(
        <>
            <div class="h-screen w-screen">
                <Link to="/Register">
                    <div 
                        class="w-30 
                                h-15 
                                bg-blue-700/50 
                                text-white 
                                text-center 
                                rounded-2xl 
                                p-4 
                                m-10 
                                fixed 
                                hover:bg-blue-700 ">
                        Sign Up
                    </div>
                </Link>
                <Navbar></Navbar>
                <div 
                    class="section-1 
                            bg-slate-950 
                            h-full 
                            w-full 
                            pt-40">
                    <h1 
                        id="bigtitle" 
                        class="font-serif 
                                text-[40px] 
                                text-white 
                                text-center">
                        Academicians
                    </h1>
                    <p 
                        class="font-sans 
                                text-[20px] 
                                text-white 
                                text-center">
                        a formal education platform supports the development of social hierarchal navigation and intellectual competitiveness and growth
                    </p>
                </div>
                <div 
                    class="section-2 
                    bg-red-700 
                    bg-contain 
                    bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Hammer_and_sickle.svg/250px-Hammer_and_sickle.svg.png)] 
                    bg-no-repeat 
                    w-screen
                    h-screen
                    pt-10
                    ">
                    <p 
                        class="text-[40px] 
                                text-yellow-300/100 
                                ml-[1000px]">
                        We perfected the art of applied machine learning and artificial intelligence into the learning process<br></br>
                        by having a responsive Ai model to teach the students based on facial recognition data and general performance of students<br></br>
                        In the platform<br></br>
                    </p>
                </div>
                <div class="section-3
                    bg-slate-950
                    w-screen
                    h-screen
                ">
                    <div class="
                        bg-[url(https://s44783.pcdn.co/in/wp-content/uploads/sites/3/2022/03/How-to-Improve-Leadership-Skills.jpg.optimal.jpg)]
                        bg-no-repeat
                        w-[1080px]
                        h-[800px]
                        rounded-xl
                        m-10
                        absolute
                    ">
                    </div>
                    <p 
                        class="
                            text-[20px] 
                            text-white 
                            mt-[40px] 
                            ml-[1200px] 
                            absolute">
                        The platform combines the ingenuity of discord's social hierarchial navigation system for users to develop capable leaders
                        in a digital world.
                    </p>
                </div>
                <div class="
                        section-4
                        bg-slate-900
                        w-screen
                        h-screen
                        ">
                    <div>
                    </div>
                </div>
                <div class="footer h-[500px] w-screen bg-gray-900">
                    <div class="absolute ml-[20px]">
                        <Link to="/Register">
                            <p class="">
                                Registration
                            </p>
                        </Link>
                    </div>
                    <Link to="/">
                        <p class="">
                            
                        </p>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Landingpage