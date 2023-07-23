import Image from "next/image"
import image from "../public/images/P2411029 REP1 (1).jpg"
import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from "next/router"

export default function NewsItem(){
    const router = useRouter()
    var slug = router.query.extensionItem
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
                <Image src={image} alt="image" width={900} height={500} className="w-full h-fit object-scale-down"/>
                <h1 className="text-2xl py-2 font-bold text-blue-800">Lorem ipsum dolor sit amet, consectetur</h1>
                <div className="antialiased leading-tight text-gray-800 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi etiam dignissim diam. Diam sollicitudin tempor id eu nisl nunc mi. Dignissim cras tincidunt lobortis feugiat vivamus at augue. Elit ullamcorper dignissim cras tincidunt lobortis feugiat. Nunc lobortis mattis aliquam faucibus purus in massa tempor. Lectus proin nibh nisl condimentum id venenatis a condimentum. Ultricies tristique nulla aliquet enim tortor at auctor urna nunc. Lobortis scelerisque fermentum dui faucibus. Aliquam malesuada bibendum arcu vitae elementum curabitur. Nec feugiat nisl pretium fusce. Proin sed libero enim sed. Ultrices eros in cursus turpis massa tincidunt dui. Justo donec enim diam vulputate ut. Ornare aenean euismod elementum nisi. Enim neque volutpat ac tincidunt vitae. Non pulvinar neque laoreet suspendisse interdum. Hac habitasse platea dictumst vestibulum rhoncus est. Eget velit aliquet sagittis id consectetur purus. Tristique et egestas quis ipsum. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Dis parturient montes nascetur ridiculus mus mauris vitae. Ultrices tincidunt arcu non sodales neque. Purus viverra accumsan in nisl nisi. Massa id neque aliquam vestibulum morbi blandit cursus risus. Libero id faucibus nisl tincidunt eget nullam non nisi. Ipsum consequat nisl vel pretium lectus quam. Vehicula ipsum a arcu cursus vitae congue. Lacus viverra vitae congue eu consequat ac felis donec et. Non sodales neque sodales ut etiam sit.<br/></div>
            </div>
            <div className="col-start-5 col-span-2 flex flex-col gap-4 pb-8 overflow-y-auto" id="sideLinks">
                <Link href="/extensions/1" passHref={true}>
                    <div className="grid grid-rows-6 grid-cols-2 relative text-white bg-green-900 hover:bg-green-600 active:bg-red-900 hover:shadow-2xl hover:shadow-sky-600">
                        <Image src={image} alt="image" width={900} height={500} className="w-full col-span-full row-span-6 z-10"/>
                        <div className="w-full bg-opacity-80 col-span-full row-start-5 row-span-2 bg-inherit py-2 absolute bottom-0 z-20">
                            <h1 className="text-center self-center cursor-pointer">Lorem ipsum dolor sit amet, consectetur</h1>
                        </div>
                    </div>
                </Link>
                <Link href="/extensions/2" passHref={true}>
                    <div className="grid grid-rows-6 grid-cols-2 relative text-white bg-green-900 hover:bg-green-600 active:bg-red-900 hover:shadow-2xl hover:shadow-sky-600">
                        <Image src={image} alt="image" width={900} height={500} className="w-full col-span-full row-span-6 z-10"/>
                        <div className="w-full bg-opacity-80 col-span-full row-start-5 row-span-2 bg-inherit py-2 absolute bottom-0 z-20">
                            <h1 className="text-center self-center cursor-pointer">Lorem ipsum dolor sit amet, consectetur</h1>
                        </div>
                    </div>
                </Link>
                <Link href="/extensions/3" passHref={true}>
                    <div className="grid grid-rows-6 grid-cols-2 relative text-white bg-green-900 hover:bg-green-600 active:bg-red-900 hover:shadow-2xl hover:shadow-sky-600">
                        <Image src={image} alt="image" width={900} height={500} className="w-full col-span-full row-span-6 z-10"/>
                        <div className="w-full bg-opacity-80 col-span-full row-start-5 row-span-2 bg-inherit py-2 absolute bottom-0 z-20">
                            <h1 className="text-center self-center cursor-pointer">Lorem ipsum dolor sit amet, consectetur</h1>
                        </div>
                    </div>
                </Link>
                <Link href="/extensions/4" passHref={true}>
                    <div className="grid grid-rows-6 grid-cols-2 relative text-white bg-green-900 hover:bg-green-600 active:bg-red-900 hover:shadow-2xl hover:shadow-sky-600">
                        <Image src={image} alt="image" width={900} height={500} className="w-full col-span-full row-span-6 z-10"/>
                        <div className="w-full bg-opacity-80 col-span-full row-start-5 row-span-2 bg-inherit py-2 absolute bottom-0 z-20">
                            <h1 className="text-center self-center cursor-pointer">Lorem ipsum dolor sit amet, consectetur</h1>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}
