import Image from "next/image"
import image from "../public/images/hubspot.jpg"
import logo from "../public/images/logo.png"

export default function Aboutus(){
    return (
        <div className="flex flex-col gap-1 md:gap-4 h-content">
            <div className="flex flex-col self-center md:px-32 pt-4">
                <h1 className="text-center text-2xl font-medium text-gray-900">About Us</h1>
                <Image src={logo} alt="logo" width={500} height={500} className="w-48 h-48 self-center md:hidden"/>
                <p className="my-4 text-gray-800 leading-normal text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eu sem integer vitae justo eget magna. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed. In fermentum et sollicitudin ac orci. Nunc consequat interdum varius sit amet mattis. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Ac turpis egestas integer eget aliquet nibh. Tortor id aliquet lectus proin nibh nisl condimentum. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat.s</p>
            </div>
            <div className="flex flex-col bg-teal-700 py-4 px-2 md:px-4 h-full">
                <div className="text-2xl font-medium text-white text-center mb-2">Our Commitment to farmers</div>
                <div className="flex flex-col md:grid grid-cols-3 gap-4 md:gap-8">
                    <div className="flex flex-col items-center">
                        <div>
                            <svg className="h-16 w-16 text-white"  width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="12" y1="8" x2="12.01" y2="8" />  <polyline points="11 12 12 12 12 16 13 16" /></svg>
                            <div className="text-white text-xl">Growth</div>
                        </div>
                        <p className="text-justify text-white text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eu sem integer vitae justo eget magna. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed. In fermentum et sollicitudin ac orci. Nunc consequat interdum varius sit amet mattis. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Ac turpis egestas integer eget aliquet nibh. Tortor id aliquet lectus proin nibh nisl condimentum. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat.s</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div>
                            <svg className="h-16 w-16 text-white"  width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="12" y1="8" x2="12.01" y2="8" />  <polyline points="11 12 12 12 12 16 13 16" /></svg>
                            <div className="text-white text-xl">Growth</div>
                        </div>
                        <p className="text-justify text-white text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eu sem integer vitae justo eget magna. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed. In fermentum et sollicitudin ac orci. Nunc consequat interdum varius sit amet mattis. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Ac turpis egestas integer eget aliquet nibh. Tortor id aliquet lectus proin nibh nisl condimentum. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div>
                            <svg className="h-16 w-16 text-white"  width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="12" y1="8" x2="12.01" y2="8" />  <polyline points="11 12 12 12 12 16 13 16" /></svg>
                            <div className="text-white text-xl">Growth</div>
                        </div>
                        <p className="text-justify text-white text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eu sem integer vitae justo eget magna. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed. In fermentum et sollicitudin ac orci. Nunc consequat interdum varius sit amet mattis. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Ac turpis egestas integer eget aliquet nibh. Tortor id aliquet lectus proin nibh nisl condimentum. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat.</p>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col bg-sky-400 py-4 px-2 md:px-4 h-96 md:h-full relative overflow-hidden">
                <Image src={image} alt="image" fill={true} className="object-fill"/>
                <div className="text-2xl font-medium text-sky-400 text-center mb-2">Our Commitment to farmers</div>
                <div className="flex flex-col md:grid grid-cols-3 gap-4 md:gap-8">
                    <div className="flex flex-col items-center">
                        <div>
                            <svg className="h-16 w-16 text-sky-400"  width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="12" y1="8" x2="12.01" y2="8" />  <polyline points="11 12 12 12 12 16 13 16" /></svg>
                            <div className="text-sky-400 text-xl">Growth</div>
                        </div>
                        <p className="text-justify text-sky-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eu sem integer vitae justo eget magna. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed. In fermentum et sollicitudin ac orci. Nunc consequat interdum varius sit amet mattis. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Ac turpis egestas integer eget aliquet nibh. Tortor id aliquet lectus proin nibh nisl condimentum. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div>
                            <svg className="h-16 w-16 text-sky-400"  width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="12" y1="8" x2="12.01" y2="8" />  <polyline points="11 12 12 12 12 16 13 16" /></svg>
                            <div className="text-sky-400 text-xl">Growth</div>
                        </div>
                        <p className="text-justify text-sky-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eu sem integer vitae justo eget magna. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed. In fermentum et sollicitudin ac orci. Nunc consequat interdum varius sit amet mattis. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Ac turpis egestas integer eget aliquet nibh. Tortor id aliquet lectus proin nibh nisl condimentum. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div>
                            <svg className="h-16 w-16 text-sky-400"  width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="12" y1="8" x2="12.01" y2="8" />  <polyline points="11 12 12 12 12 16 13 16" /></svg>
                            <div className="text-sky-400 text-xl">Growth</div>
                        </div>
                        <p className="text-justify text-sky-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eu sem integer vitae justo eget magna. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed. In fermentum et sollicitudin ac orci. Nunc consequat interdum varius sit amet mattis. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Ac turpis egestas integer eget aliquet nibh. Tortor id aliquet lectus proin nibh nisl condimentum. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat.</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col py-4 md:pb-8 px-2 md:px-4 h-full rounded">
                <div className="text-3xl font-medium text-sky-900 text-center mb-2 md:mb-3">What makes us unique</div>
                <div className="flex flex-col md:grid grid-cols-3 gap-4 md:gap-8">
                    <div className="flex flex-col items-center bg-sky-800 p-2 md:p-6 rounded-lg shadow-sky-600 shadow-xl">
                        <div>
                            <svg className="h-16 w-16 text-white"  width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="12" y1="8" x2="12.01" y2="8" />  <polyline points="11 12 12 12 12 16 13 16" /></svg>
                            <div className="text-white text-xl">Growth</div>
                        </div>
                        <p className="text-justify text-white text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eu sem integer vitae justo eget magna. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed. In fermentum et sollicitudin ac orci. Nunc consequat interdum varius sit amet mattis. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Ac turpis egestas integer eget aliquet nibh. Tortor id aliquet lectus proin nibh nisl condimentum. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat.</p>
                    </div>
                    <div className="flex flex-col items-center bg-sky-800 p-2 md:p-6 rounded-lg shadow-sky-600 shadow-xl">
                        <div>
                            <svg className="h-16 w-16 text-white"  width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="12" y1="8" x2="12.01" y2="8" />  <polyline points="11 12 12 12 12 16 13 16" /></svg>
                            <div className="text-white text-xl">Growth</div>
                        </div>
                        <p className="text-justify text-white text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eu sem integer vitae justo eget magna. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed. In fermentum et sollicitudin ac orci. Nunc consequat interdum varius sit amet mattis. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Ac turpis egestas integer eget aliquet nibh. Tortor id aliquet lectus proin nibh nisl condimentum. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat.</p>
                    </div>
                    <div className="flex flex-col items-center bg-sky-800 p-2 md:p-6 rounded-lg shadow-sky-600 shadow-xl">
                        <div>
                            <svg className="h-16 w-16 text-white"  width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="12" y1="8" x2="12.01" y2="8" />  <polyline points="11 12 12 12 12 16 13 16" /></svg>
                            <div className="text-white text-xl">Growth</div>
                        </div>
                        <p className="text-justify text-white text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eu sem integer vitae justo eget magna. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed. In fermentum et sollicitudin ac orci. Nunc consequat interdum varius sit amet mattis. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Ac turpis egestas integer eget aliquet nibh. Tortor id aliquet lectus proin nibh nisl condimentum. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}