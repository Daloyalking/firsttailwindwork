import React, { useState } from "react";
import {data} from '../data/Data'

const Foods=()=>{
    const [foods,setFood]=useState(data)
    const filterType=(category)=>(
        setFood(
            data.filter((item)=>{
                return item.category===category
            })
        )
    )

    const filterPrice=(price)=>(
        setFood(
            data.filter((item)=>{
                return item.price===price
            })
        )
    )
    return(
        <div className="max-w-[1640px] px-4 py-12 mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-600 text-center">Top Rated Menu Items</h1>
            <div className="flex flex-col lg:flex-row justify-between">
                <div>
                    <p className="font-bold text-left text-gray-500">Filter Type</p>
                    <div className="flex justify-between flex-wrap pt-3">
                        <button onClick={()=>setFood(data)} className="border border-orange-600 max-w-[200px] text-orange-600 bg-white rounded-2xl mb-2 mr-2 px-5 py-2 hover:bg-orange-600 hover:text-white duration-200">All</button>
                        <button onClick={()=>filterType('burger')} className="border border-orange-600 max-w-[200px] text-orange-600 bg-white rounded-2xl mb-2 px-5 mr-2 py-2 hover:bg-orange-600 hover:text-white duration-200">Burgers</button>
                        <button onClick={()=>filterType('pizza')} className="border border-orange-600 max-w-[200px] text-orange-600 bg-white rounded-2xl mb-2 px-5 mr-2 py-2 hover:bg-orange-600 hover:text-white duration-200">Pizza</button>
                        <button onClick={()=>filterType('salad')} className="border border-orange-600 max-w-[200px] text-orange-600 bg-white rounded-2xl mb-2 px-5 mr-2 py-2 hover:bg-orange-600 hover:text-white duration-200">Salads</button>
                        <button onClick={()=>filterType('chicken')} className="border border-orange-600 max-w-[200px] text-orange-600 bg-white rounded-2xl mb-2 px-5 mr-2 py-2 hover:bg-orange-600 hover:text-white duration-200">Chicken</button>
                    </div>
                </div>

                <div>
                    <p className="font-bold text-left text-gray-500">Filter Price</p>
                    <div className="flex justify-between flex-wrap pt-3">
                        <button onClick={()=>filterPrice('$')} className="border border-orange-600 max-w-[200px] text-orange-600 bg-white rounded-2xl mr-2 px-5 py-2 hover:bg-orange-600 hover:text-white duration-200">$</button>
                        <button onClick={()=>filterPrice('$$')} className="border border-orange-600 max-w-[200px] text-orange-600 bg-white rounded-2xl mr-2 px-5 py-2 hover:bg-orange-600 hover:text-white duration-200">$$</button>
                        <button onClick={()=>filterPrice('$$$')} className="border border-orange-600 max-w-[200px] text-orange-600 bg-white rounded-2xl mr-2 px-5 py-2 hover:bg-orange-600 hover:text-white duration-200">$$$</button>
                        <button onClick={()=>filterPrice('$$$$')} className="border border-orange-600 max-w-[200px] text-orange-600 bg-white rounded-2xl mr-2 px-5 py-2 hover:bg-orange-600 hover:text-white duration-200">$$$$</button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-12">
                {
                    foods.map((item,index)=>(
                        <div className="border shadow-lg hover:scale-105 duration-300 rounded-lg">
                            <img className="w-full h-[200px] rounded-lg object-cover" src={item.image} alt={item.name}/>
                            <div key={index} className="flex justify-between px-2 py-4">
                                <p className="font-bold p-1">{item.name}</p>
                                <p className="flex"><span className="font-bold p-1 bg-orange-600 text-white rounded-lg">{item.price}</span></p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Foods