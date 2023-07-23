import Image from "next/image"
import background from "../public/images/extension.png"
import Link from "next/link"

export default function Hero({data}: any){
    const text = JSON.parse(data)
    return (
    <div className="h-screen md:h-[90vh] bg-black flex flex-col md:grid grid-cols-5 p-2 md:p-12 gap-2 overflow-hidden relative items-center">
        <Image
         src={background}
         alt="background Image"
         fill={true}
         className="object-fill z-0 blur-sm brightness-50"
        />
        <div className="col-span-3 md:mr-12 pt-12 md:p-6 flex flex-col gap-8 z-10">
            <p>
                <span className="text-4xl text-white focus:bg-gray-900 focus:text-white" id="hero1">We are Ecogenius, we are dedicated to your</span> {/*text.hero1*/}
                <span className="text-4xl text-yellow-400" id="hero2">{text.hero2}</span>
            </p>
            <div className="text-xl font-light text-gray-300" id="hero3">{text.hero3}</div>
        </div>
        <div className="col-span-2 pt-12 md:p-6 flex flex-col justify-center items-start z-10">
            <p>
                <span className="text-4xl text-white" id="hero4">{text.hero4}</span>
                <span className="text-4xl text-yellow-400" id="hero5">{text.hero5}</span>
                <span className="text-4xl text-white" id="hero6">{text.hero6}</span>
            </p>
            <Link href="/about" passHref><div className="bg-white p-2 rounded mt-6 hover:bg-green-600 hover:text-white active:bg-red-500 active:text-white">Learn more about us</div></Link>
            <Link href="/market" passHref><div className="bg-green-300 p-2 rounded mt-6 hover:bg-green-600 hover:text-white active:bg-red-500 active:text-white hover:shadow hover:shadow-green-600">Visit our store</div></Link>
        </div>
    </div>
    )
}
