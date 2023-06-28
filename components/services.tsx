import Image from "next/image"
import growth from "../public/images/growth.png"
import Link from "next/link"

export default function Services({ data }: any){
    const text = JSON.parse(data)

    return (<div className="flex flex-col md:flex-row md:py-20 md:px-6 gap-6 md:gap-12 justify-between items-stretch md:h-screen relative">
        <div className="bg-yellow-300 w-full flex flex-col pb-8 md:py-auto">
            <Image alt="Growth Image" src={growth} height={500} width={500} className="w-1/2 self-center"/>
            <span className="text-2xl font-medium self-center text-gray-800" id="services1">{text.services1}</span>
            <p className="text-xl text-gray-800 p-8 self-center text-center" id="services2">{text.services2}</p>
            <Link href="/about" passHref className="self-center hover:shadow hover:shadow-green-600"><div className="active:bg-red-500 text-center text-white hover:text-green-500 hover:bg-white hover:font-medium bg-green-700 py-2 px-8 rounded">Read more</div></Link>
        </div>
        <div className="bg-cyan-300 w-full flex flex-col pb-8 md:py-auto">
            <Image alt="Growth Image" src={growth} height={500} width={500} className="w-1/2 self-center"/>
            <span className="text-2xl font-medium self-center text-gray-800" id="services3">{text.services3}</span>
            <p className="text-xl text-gray-800 p-8 self-center text-center" id="services4">{text.services4}</p>
            <Link href="/about" passHref className="self-center hover:shadow hover:shadow-green-600"><div className="active:bg-red-500 text-center text-white hover:text-green-500 hover:bg-white hover:font-medium bg-green-700 py-2 px-8 rounded">Read more</div></Link>
        </div>
        <div className="bg-green-300 w-full flex flex-col pb-8 md:py-auto">
            <Image alt="Growth Image" src={growth} height={500} width={500} className="w-1/2 self-center"/>
            <span className="text-2xl font-medium self-center text-gray-800" id="services5">{text.services5}</span>
            <p className="text-xl text-gray-800 p-8 self-center text-center" id="services6">{text.services6}</p>
            <Link href="/about" passHref className="self-center hover:shadow hover:shadow-green-600"><div className="active:bg-red-500 text-center text-white hover:text-green-500 hover:bg-white hover:font-medium bg-green-700 py-2 px-8 rounded">Read more</div></Link>
        </div>
    </div>
    )
}