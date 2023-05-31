import Image from "next/image"
import background from "../public/images/extension.png"

export default function Hero(){
    return (<div className="h-screen md:h-[80vh] flex flex-col md:grid grid-cols-5 p-12 gap-2 overflow-hidden relative items-center">
        <Image
         src={background}
         alt="background Image"
         fill={true}
         className="object-fill z-0 filter blur brightness-50"
        />
        <div className="col-span-3 mr-12 pt-12 md:p-6 flex flex-col gap-8 z-10">
            <p>
                <span className="text-4xl text-white"> We are SMAQUI, we are dedicated to your </span>
                <span className="text-4xl text-yellow-400">Growth</span>
            </p>
            <div className="text-xl font-light text-gray-300">Your Best Solution is to work with us</div>
        </div>
        <div className="col-span-2 pt-12 md:p-6 flex flex-col justify-center items-start z-10">
            <p>
                <span className="text-4xl text-white"> To give you the best </span>
                <span className="text-4xl text-yellow-400">Service</span>
                <span className="text-4xl text-white"> is our purpose!</span>
            </p>
            <div className="bg-white p-2 rounded mt-6">Learn more about us</div>
            <div className="bg-green-300 p-2 rounded mt-6">Visit our store</div>
        </div>
    </div>
    )
}