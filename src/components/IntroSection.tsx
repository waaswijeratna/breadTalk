import { ChefHat } from 'lucide-react';

const IntroSection = () => {
    return (
        <div className="h-[100vh] w-full">
            <div className="flex justify-between items-center">
                <div className="w-[2vw] h-[40vh] bg-orange-300"></div>
                <div className="flex flex-col  gap-5">
                    <div>
                        <p className='text-6xl text-gray-700 font-bold'>DELICIOUS</p>
                        <p className='text-6xl text-orange-500 font-bold pl-8'>TALKATIVE</p>
                        <p className='text-6xl text-orange-400 font-bold pl-3'>BREADS!</p>
                    </div>
                    <div className="flex justify-center lg:justify-start mt-6">
                        <button className="group flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 hover:shadow-lg">
                            <ChefHat className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                            Explore Our Bakery
                        </button>
                    </div>
                </div>
                <div className="w-[45vw] h-[90vh] overflow-hidden mr-8">
                    <img src="bt-bg.png" className="object-fit w-full h-full" alt="Background Image"></img>
                </div>

            </div>
        </div>
    )
}

export default IntroSection;