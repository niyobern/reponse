import Image from "next/image"
import Link from "next/link"

export default function Opportunity({ opportunity }: any){
    return (
        <div className="w-full flex flex-col gap-2 p-2">
            <h1 className="text-gray-800 text-lg font-medium">{opportunity.tiitle}</h1>
            <p className="text-gray-800 text-justify">{opportunity.description}</p>
            {opportunity.images.length > 0 ? <Image src={opportunity.images[0]} alt="image" width={900} height={500} className="w-full h-fit object-scale-down"/> : null}
            <Link href={opportunity.link} className="w-full py-1 bg-green-700 text-white hover:bg-green-800 text-center">Open Link</Link>
        </div>
    )
}
