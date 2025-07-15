import { Link } from 'react-router-dom'
import { useEffect, useRef } from "react"


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
                    <div class="w-30 h-30 bg-blue-700/50 text-white text-center rounded-2xl p-6 m-10 fixed hover:bg-blue-700 ">
                        Register now!
                    </div>
                </Link>

                <div class="section-1 bg-slate-950 h-full w-full pt-40">
                    <h1 id="bigtitle" class="font-serif text-[40px] text-white text-center">
                        Academicians
                    </h1>
                    <p class="font-sans text-[20px] text-white text-center">
                        a formal education platform supports the development of social hierarchal navigation and intellectual competitiveness and growth
                    </p>
                </div>
                <div class="section-2 
                    bg-red-700 
                    bg-contain 
                    bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Hammer_and_sickle.svg/250px-Hammer_and_sickle.svg.png)] 
                    bg-no-repeat 
                    w-full 
                    h-full
                    pt-10
                    ">
                    <p class="text-[40px] text-yellow-300/100 ml-[1000px]">
                        Our platform combines the social structure ingenuity of discord and khan academy's<br></br>
                        passive teaching structures to develop the ultimate cost efficient high quality<br></br>
                        education platform there is.<br></br>
                    </p>
                </div>
                <div class="section-3
                    bg-slate-950
                    w-full
                    h-full
                ">
                    <div class="
                        bg-[url(https://s44783.pcdn.co/in/wp-content/uploads/sites/3/2022/03/How-to-Improve-Leadership-Skills.jpg.optimal.jpg)]
                        bg-no-repeat
                        w-full
                        h-full
                        rounded-xl
                        m-10
                        absolute
                    ">
                    </div>
                    <p class="text-[20px] text-white mt-[40px] ml-[1200px] absolute">
                        Students are expected to thrive in both the academia and industries
                    </p>
                </div>
                <div class="footer">

                </div>
            </div>
        </>
    )
}

export default Landingpage