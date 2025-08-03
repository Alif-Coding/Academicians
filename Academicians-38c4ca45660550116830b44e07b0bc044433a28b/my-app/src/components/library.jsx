import { Link } from 'react-router-dom'

export default function Library() {
    return(
        <>
            <div class="Library h-1920 w-full bg-blue-100 flex">
                
                <Link to="/mainpage">
                    <div class="
                        h-[50px]
                        w-[200px]
                        text-white
                        text-center
                        py-[10px]
                        mt-[50px]
                        ml-[50px]
                        rounded-2xl
                        fixed
                        bg-blue-600">
                        Return To Main  
                    </div>
                </Link>
                <div class="ml-[35%]">
                    <h1 class="text-[60px] text-white text-center fixed">
                        Your Notes
                    </h1>
                </div>
                <div class="mt-[500px]">
                    <div class=" h-[920px] w-[400px] bg-slate-800 rounded-2xl absolute">
                        <h1 class="text-center text-white">
                            EJU Japanese Materials 101
                        </h1>
                        <div class="
                            h-[800px]
                            w-[800px]
                            rounded-2xl
                            bg-cover
                            bg-no-repeat
                            bg-[url(C:\Users\Anja\Academicians\Academicians-38c4ca45660550116830b44e07b0bc044433a28b\my-app\src\assets\Screenshot 2025-08-02 204937.png)]

                        ">

                        </div>
                    </div>
                    <div class="">

                    </div>
                    <div class="">

                    </div>
                </div>
            </div>
        </>
    )
}