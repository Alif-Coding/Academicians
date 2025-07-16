
function Pricing() {

    return(
        <>
            <div class="h-screen w-screen bg-yellow-100 flex">
                <div class="h-[800px] w-[500px] bg-yellow-200 text-center rounded-2xl p-2 mt-4 ml-[40px] ">
                    <h1 class="text-[40px] font-bold text-blue-600">
                        Free
                    </h1>
                    <p>
                        0$/month</p>
                    <div>

                    </div>
                </div>
                <div class="h-[800px] w-[500px] bg-yellow-200 text-center rounded-2xl p-2 mt-4 ml-[40px] ">
                    <h1 class="text-[40px] font-bold text-blue-600">
                        Premium
                    </h1>
                    <p>
                        250$/month
                    </p>
                    <div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pricing;