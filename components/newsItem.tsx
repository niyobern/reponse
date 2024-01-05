import Image from "next/image"
import image from "../public/images/P2411029 REP1 (1).jpg"
import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from "next/router"

export default function NewsItem({ extensions }: any){
    const router = useRouter()
    const slug = router.query.extensionItem || 0
    const current = String(slug)
    function getHeight(){
        const main = document.getElementById("mainItem")
        const height = main?.clientHeight
        let side = document.getElementById("sideLinks")
        side == null ? null : side.style.height = height + "px"
    }
    useEffect(getHeight, [slug])
    return (
        <div className="flex flex-col md:grid grid-cols-6 p-2 gap-4 h-min">
            <div className="col-start-1 col-span-4 h-fit flex flex-col" id="mainItem">
                <Image src={`https://reponse_backend-1-r0934826.deta.app/images/view/${extensions[current].images[0]}`} alt="image" width={900} height={500} className="w-full h-fit object-scale-down"/>
                <h1 className="text-2xl py-2 font-bold text-blue-800">{extensions[current].title}</h1>
                <div className="antialiased leading-tight text-gray-800 text-justify">{extensions[current].content}<br/></div>
            </div>
            <div className="col-start-5 col-span-2 flex flex-col gap-4 pb-8 overflow-y-auto" id="sideLinks">
                {extensions.map((ext: any, i: number) => (
                    <Link href={`/extensions/1${i}`} passHref={true}>
                        <div key={ext.key} className="grid grid-rows-6 grid-cols-2 relative text-white bg-green-900 hover:bg-green-600 active:bg-red-900 hover:shadow-2xl hover:shadow-sky-600">
                            <Image src={`https://reponse_backend-1-r0934826.deta.app/images/view/${ext.images[0]}`} alt="image" width={900} height={500} className="w-full col-span-full row-span-6 z-10"/>
                            <div className="w-full bg-opacity-80 col-span-full row-start-5 row-span-2 bg-inherit py-2 absolute bottom-0 z-20">
                                <h1 className="text-center self-center cursor-pointer">{ext.title}</h1>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
