import React from "react";
import image1 from '../images/foods.jpeg'

const Hero=()=>{
    return(
        <div className="max-w-[1640px] mx-auto p-4">
        <div className="relative md:max-h-[500px] max-h-[400px]">
            <div className="absolute w-full h-full text-gray-500 bg-black/400 flex px-4 flex-col justify-center items-start">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">The <span className="text-orange-500">Best</span> </h1>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Food <span className="text-orange-500">Delivery</span> </h1>
            </div>
            <img className="w-full md:max-h-[500px] max-h-[400px] object-cover" src={image1} alt="Food"/>
        </div>
        </div>
    )
}
export  default Hero