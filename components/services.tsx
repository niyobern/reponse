import Image from "next/image"
import growth from "../public/images/growth.png"

export default function Services({ page }: any){

    return (<div className="flex flex-col md:flex-row md:py-20 my-6 md:px-6 gap-6 md:gap-12 justify-between items-stretch md:h-screen relative">
        <div className="bg-yellow-300 w-full flex flex-col pb-8 md:py-auto">
            <Image alt="Growth Image" src={growth} height={500} width={500} className="w-1/2 self-center"/>
            <span className="text-2xl font-medium self-center text-gray-800">Marketing and sales</span>
            <p className="text-xl text-gray-800 p-8 self-center text-center">Find Buyers, sell and advertise farm produce and promote farm brand integrity</p>
            <div className="text-center text-white hover:text-green-500 hover:bg-white hover:font-medium self-center bg-green-700 py-2 px-8 rounded">Read more</div>
        </div>
        <div className="bg-cyan-300 w-full flex flex-col pb-8 md:py-auto">
            <Image alt="Growth Image" src={growth} height={500} width={500} className="w-1/2 self-center"/>
            <span className="text-2xl font-medium self-center text-gray-800">Marketing and sales</span>
            <p className="text-xl text-gray-800 p-8 self-center text-center">Find Buyers, sell and advertise farm produce and promote farm brand integrity</p>
            <div className="text-center text-white hover:text-green-500 hover:bg-white hover:font-medium self-center bg-green-700 py-2 px-8 rounded">Read more</div>
        </div>
        <div className="bg-green-300 w-full flex flex-col pb-8 md:py-auto">
            <Image alt="Growth Image" src={growth} height={500} width={500} className="w-1/2 self-center"/>
            <span className="text-2xl font-medium self-center text-gray-800">Marketing and sales</span>
            <p className="text-xl text-gray-800 p-8 self-center text-center">Find Buyers, sell and advertise farm produce and promote farm brand integrity</p>
            <div className="text-center text-white hover:text-green-500 hover:bg-white hover:font-medium self-center bg-green-700 py-2 px-8 rounded">Read more</div>
        </div>
    </div>
    )
}