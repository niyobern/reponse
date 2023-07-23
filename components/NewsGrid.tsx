import Image from "next/image"
import image from "../public/images/P2411029 REP1 (1).jpg"
import Link from "next/link"

export default function NewsGrid(){
    return (
        <div className="p-2 md:p-12 md:px-24 flex flex-col md:grid grid-cols-2 gap-4 md:gap-12">
            <div className="flex flex-col items-start w-full shadow-lg pb-4 px-2">
                <div className="text-2xl font-semibold mb-4 text-gray-900">Conservation Agriculture</div>
                <Image src={image} alt="image" width={500} height={500} className="w-full max-h-[40vh] rounded"/>
                <p className="my-4 text-gray-700 w-full leading-normal text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eu sem integer vitae justo eget magna. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed. In fermentum et sollicitudin ac orci. Nunc consequat interdum varius sit amet mattis. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Ac turpis egestas integer eget aliquet nibh. Tortor id aliquet lectus proin nibh nisl condimentum. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat.</p>
                <Link href="/extensions/1" passHref className="hover:shadow hover:shadow-green-600"><div className="text-center text-white hover:text-green-500 hover:bg-white hover:font-medium bg-green-700 py-2 px-8 rounded">Read more</div></Link>

            </div>
            <div className="flex flex-col items-start w-full shadow-lg pb-4 px-2">
                <div className="text-2xl font-semibold mb-4 text-gray-900">Conservation Agriculture</div>
                <Image src={image} alt="image" width={500} height={500} className="w-full md:max-h-[40vh] rounded"/>
                <p className="my-4 text-gray-700 w-full leading-normal text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eu sem integer vitae justo eget magna. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed. In fermentum et sollicitudin ac orci. Nunc consequat interdum varius sit amet mattis. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Ac turpis egestas integer eget aliquet nibh. Tortor id aliquet lectus proin nibh nisl condimentum. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat.</p>
                <Link href="/extensions/1" passHref className="hover:shadow hover:shadow-green-600"><div className="text-center text-white hover:text-green-500 hover:bg-white hover:font-medium bg-green-700 py-2 px-8 rounded">Read more</div></Link>
            </div>
        </div>
    )
}
