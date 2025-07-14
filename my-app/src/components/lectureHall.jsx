import Split from 'react-split';

export default function Lecturehall() {
    
    return(
        <>
            <div className="lectureHall h-screen w-screen bg-slate-700 p-10">
                <h1 class="font-bold text-3xl text-center text-white pt-5">
                    welcome to lecture hall 
                </h1>
                <div className="">
                    <Split split="vertical" gutterSize={10} minSize={100}>
                        <Split direction="horizontal" gutterSize={10} minSize={100}>
                            <div className="displayBoard h-95 w-full bg-slate-800 rounded-[20px]">
                            </div>
                            <div className="students h-50 w-full bg-slate-900 rounded=[20px]">
                            </div>
                        </Split>
                    <div class="chatbox h-100 w-25 bg-green-100">
                    </div>
                    </Split>
                </div>
            </div>
        </>
    )
}