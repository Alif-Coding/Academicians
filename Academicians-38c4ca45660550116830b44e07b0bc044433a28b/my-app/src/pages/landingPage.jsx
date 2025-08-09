import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
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
                <Link to="/Register" >
                    <div 
                        class="w-30 
                                h-15 
                                bg-blue-700/50 
                                text-white 
                                text-center 
                                rounded-2xl 
                                p-4 
                                m-10 
                                z-10
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
                                text-[80px] 
                                text-white 
                                text-center">
                        Academicians
                    </h1>
                    <p 
                        class="font-sans 
                                text-[20px] 
                                text-white 
                                text-center">
                        a formal education platform supports the development of <span class="hover:underline">social hierarchal navigation</span> and <span class="hover:underline">intellectual competitiveness and growth</span>
                    </p>
                    <div class="
                        flex
                        mt-[80px]
                    ">
                        <div class="
                            h-[200px] 
                            w-[400px] 
                            bg-white/80 
                            rounded-2xl 
                            mx-[50px]
                            flex   
                            hover:scale-105 transition duration-300 ease-in-out
                            hover:bg-white">
                            <div>
                                
                                <div class="
                                bg-[url(https://cdn.myanimelist.net/r/200x268/images/characters/10/249647.jpg)]
                                bg-contain
                                bg-no-repeat
                                w-[150px]
                                h-[150px]
                                mt-[20px]
                                ml-[50px]
                                
                                ">

                                </div>
                                
                            </div>
                            <p class="font-serif mt-[20px]">
                                <q>
                                    This is peak
                                </q>
                                <h1 class="text-[20px] absolute">
                                    -L Lawliet
                                </h1>
                            </p>
                        </div>
                        <div class="
                            h-[200px] 
                            w-[400px] 
                            bg-white/80 
                            rounded-2xl
                            mx-[50px] 
                            flex   
                            hover:scale-105 transition duration-300 ease-in-out
                            hover:bg-white">
                            <div>
                                <div class="
                                bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNpJX56KK3otVu0tDkb3MmFQvLGgiLP0rm1A&s)]
                                bg-contain
                                bg-no-repeat
                                w-[150px]
                                h-[150px]
                                mt-[20px]
                                ml-[50px]
                                
                                "></div>
                                
                            </div>
                                <p class="font-serif mt-[20px]">
                                    <q>
                                    The finest institution in nurturing master morality
                                    </q>
                                    <h1 class="text-[20px] absolute">
                                        -Friedrich<br></br>  
                                        Nietzsche
                                    </h1>
                                </p>
                        </div>
                        <div class="
                            h-[200px] 
                            w-[400px] 
                            bg-white/80 
                            rounded-2xl
                            mx-[50px] 
                            flex   
                            hover:scale-105 transition duration-300 ease-in-out
                            hover:bg-white">
                            <div>
                                <div class="
                                bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUG3hEUFgS3WXQ2x2CpfKHtWfgmi1IXDJsfg&s)]
                                bg-contain
                                bg-no-repeat
                                w-[150px]
                                h-[150px]
                                mt-[20px]
                                ml-[50px]
                                
                                "></div>
                                
                            </div>
                                <p class="font-serif mt-[20px]">
                                    <q>
                                    Imprenetable for alieanation
                                    </q>
                                    <h1 class="text-[20px] absolute">
                                        -Niccolo<br></br>  
                                        Machiavelli
                                    </h1>
                                </p>
                        </div>
                        <div class="
                            h-[200px] 
                            w-[400px] 
                            bg-white/80 
                            rounded-2xl
                            mx-[50px] 
                            flex   
                            hover:scale-105 transition duration-300 ease-in-out
                            hover:bg-white">
                            <div>
                                <div class="
                                bg-[url(https://i.natgeofe.com/n/37c3c776-b8cb-4be1-988a-cf593c776b88/01-leonardo-da-vinci-book-talk.jpg)]
                                bg-contain
                                bg-no-repeat
                                w-[150px]
                                h-[150px]
                                mt-[20px]
                                ml-[50px]
                                
                                "></div>
                                
                            </div>
                                <p class="font-serif mt-[20px]">
                                    <q>
                                    If i were to have children, i'd have them taken care of here ngl fr fr
                                    </q>
                                    <h1 class="text-[20px] absolute">
                                        -Leonardo Da Vinci
                                    </h1>
                                </p>
                        </div>
                        <div class="
                            h-[200px] 
                            w-[400px] 
                            bg-white/80 
                            rounded-2xl
                            mx-[50px] 
                            flex   
                            hover:scale-105 transition duration-300 ease-in-out
                            hover:bg-white">
                            <div>
                                <div class="
                                bg-[url(https://media.licdn.com/dms/image/v2/D4E03AQFWd9cuCZ0ZHQ/profile-displayphoto-shrink_800_800/B4EZVuvTbfGgAc-/0/1741319650519?e=1756944000&v=beta&t=mlEW_Y1c_UjQhfTFV4zmDkQyRYv4g-UOI72dbl00d0I)]
                                bg-contain
                                bg-no-repeat
                                w-[150px]
                                h-[150px]
                                mt-[20px]
                                ml-[50px]
                                
                                "></div>
                                
                            </div>
                                <p class="font-serif mt-[20px]">
                                    <q>
                                    I'd let these guys raise my children ngl
                                    </q>
                                    <h1 class="text-[20px] absolute">
                                        -Alif Kenzie<br></br> 
                                        Wibiyoso
                                    </h1>
                                </p>
                        </div>
                    </div>
                    
                </div>
                <div 
                    class="section-2 
                    bg-red-700 
                    w-screen
                    h-screen
                    pt-10
                    ">
                    <div class="
                        bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Hammer_and_sickle.svg/250px-Hammer_and_sickle.svg.png)] 
                        bg-contain
                        w-[800px]
                        h-[800px]
                        rounded-2xl
                        ml-[20px]
                        absolute
                        bg-no-repeat">
                    </div>
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
                        bg-cover
                        w-[700px]
                        h-[400px]
                        rounded-2xl
                        mt-[300px]
                        ml-[100px]
                        absolute
                        overflow-hidden
                    ">
                    </div>
                    <p 
                        class="
                            text-[20px] 
                            text-white 
                            mt-[400px] 
                            ml-[1000px] 
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
                    <div class="">
                        <h1 class="text-white">
                            Tuition fee reductions are offered based on the student's personal progress
                        </h1>
                    </div>
                </div>
                <div class="footer h-[500px] w-screen bg-gray-900">
                    <div class="absolute ml-[20px]">
                        <Link to="/Register">
                            <p class="text-white text-[25px]">
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