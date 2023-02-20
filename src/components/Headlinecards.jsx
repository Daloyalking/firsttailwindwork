import React from "react";
import image1 from '../images/foods.jpeg'


const Headlinecards=()=>{
    return (
        <div className="max-w-[1640px] py-12 mx-auto p-4 grid md:grid-cols-3 gap-6">
            <div className="relative rounded-xl">
                <div className="absolute w-full h-full rounded-xl pt-2 md:pt-6 flex flex-col items-start bg-black/500 px-4 text-2xl text-white font-bold">
                    <p className="pt-3">Sum's Out,BOGO</p>
                    <p className="py-2">Through 8/26</p>
                    <button className="border border-black max-w-[200px] text-black bg-white rounded-full px-5 py-2">Order Now</button>
                </div>
                <img className="w-full rounded-xl max-h-[160px] md:max-h-[200px] object-cover" src={image1} alt="/"/>
            </div>

            <div className="relative rounded-xl">
                <div className="absolute w-full h-full rounded-xl pt-2 md:pt-6 flex flex-col items-start bg-black/500 px-4 text-2xl text-white font-bold">
                    <p className="pt-3">Sum's Out,BOGO</p>
                    <p className="py-2">Through 8/26</p>
                    <button className="border border-black max-w-[200px] text-black bg-white rounded-full px-5 py-2">Order Now</button>
                </div>
                <img className="w-full rounded-xl max-h-[160px] md:max-h-[200px] object-cover" src={image1} alt="/"/>
            </div>

            <div className="relative rounded-xl">
                <div className="absolute w-full h-full rounded-xl pt-2 md:pt-6 flex flex-col items-start bg-black/500 px-4 text-2xl text-white font-bold">
                    <p className="pt-3">Sum's Out,BOGO</p>
                    <p className="py-2">Through 8/26</p>
                    <button className="border border-black max-w-[200px] text-black bg-white rounded-full px-5 py-2">Order Now</button>
                </div>
                <img className="w-full rounded-xl max-h-[160px] md:max-h-[200px] object-cover" src={image1} alt="/"/>
            </div>

            <div className="relative rounded-xl">
                <div className="absolute w-full h-full rounded-xl pt-2 md:pt-6 flex flex-col items-start bg-black/500 px-4 text-2xl text-white font-bold">
                    <p className="pt-3">Sum's Out,BOGO</p>
                    <p className="py-2">Through 8/26</p>
                    <button className="border border-black max-w-[200px] text-black bg-white rounded-full px-5 py-2">Order Now</button>
                </div>
                <img className="w-full rounded-xl max-h-[160px] md:max-h-[200px] object-cover" src={image1} alt="/"/>
            </div>

            <div className="relative rounded-xl">
                <div className="absolute w-full h-full rounded-xl pt-2 md:pt-6 flex flex-col items-start bg-black/500 px-4 text-2xl text-white font-bold">
                    <p className="pt-3">Sum's Out,BOGO</p>
                    <p className="py-2">Through 8/26</p>
                    <button className="border border-black max-w-[200px] text-black bg-white rounded-full px-5 py-2">Order Now</button>
                </div>
                <img className="w-full rounded-xl max-h-[160px] md:max-h-[200px] object-cover" src={image1} alt="/"/>
            </div>

            <div className="relative rounded-xl">
                <div className="absolute w-full h-full rounded-xl pt-2 md:pt-6 flex flex-col items-start bg-black/500 px-4 text-2xl text-white font-bold">
                    <p className="pt-3">Sum's Out,BOGO</p>
                    <p className="py-2">Through 8/26</p>
                    <button className="border border-black max-w-[200px] text-black bg-white rounded-full px-5 py-2">Order Now</button>
                </div>
                <img className="w-full rounded-xl max-h-[160px] md:max-h-[200px] object-cover" src={image1} alt="/"/>
            </div>
            
        </div>
    )
}

export default Headlinecards