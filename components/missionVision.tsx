import Image from "next/image"
import growth from "../public/images/growth.png"
import background from "../public/images/extension.png"

export default function MissionVission({ page }: any){

    return (<div className="flex flex-col md:flex-row py-24 md:py-48 px-2 md:px-24 gap-6 relative bg-black">
        <Image src={background} alt="background" fill={true} className="z-0 object-fill opacity-50"/>
        <div className="bg-gray-600 bg-opacity-70 rounded w-full py-12 flex flex-col items-center relative z-20">
            <span className="text-white text-3xl font-bold uppercase">Mission</span>
            <p className="text-white text-xl text-center p-4 md:p-12">At Ecogenius Conserve, we promote sustainable and conservation agriculture, environmental restoration, and conservation practices to achieve long-term ecological balance and enhance the well-being of present and future generations.</p>
        </div>
        <div className="bg-gray-600 bg-opacity-70 rounded w-full py-12 flex flex-col items-center z-20">
            <span className="text-white text-3xl font-bold uppercase">Vision</span>
            <p className="text-white text-xl text-center p-4 md:p-12">To be the recognized catalyst for sustainable agriculture, environmental restoration, and conservation, empowering communities and leading global efforts towards a thriving, harmonious future in sub-Saharan Africa.</p>
        </div>
    </div>
    )
}