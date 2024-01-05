import Image from "next/image"
import Link from "next/link"

export default function NewsGrid({extensions}: any){
    return (
        <div className="p-2 md:p-12 md:px-24 flex flex-col md:grid grid-cols-2 gap-4 md:gap-12">
            {extensions.map((ext: any, i: number) => (
                <div key={ext.key} className="flex flex-col items-start w-full shadow-lg pb-4 px-2">
                    <div className="text-2xl font-semibold mb-4 text-gray-900">{ext.title}</div>
                    <Image src={`https://reponse_backend-1-r0934826.deta.app/images/view/${ext.images[0]}`} alt="image" width={500} height={500} className="w-full max-h-[40vh] rounded"/>
                    <p className="my-4 text-gray-700 w-full leading-normal text-justify">{ext.content}</p>
                    <Link href="/extensions/1" passHref className="hover:shadow hover:shadow-green-600"><div className="text-center text-white hover:text-green-500 hover:bg-white hover:font-medium bg-green-700 py-2 px-8 rounded">Read more</div></Link>
                </div>
            ))}
        </div>
    )
}
