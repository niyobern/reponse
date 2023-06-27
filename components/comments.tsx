import Image from "next/image";
import image from "../public/images/picture.webp"

export default function Comments({ data }: any){
    const text = JSON.parse(data)
    return (
        <div className="flex flex-col">
            <div className="flex flex-col items-center pt-10">
                <p className="leading-none text-lg text-fuchsia-500 uppercase font-medium" id="comment1">{text.comment1}</p>
                <h1 className="leading-tight text-3xl antialiased font-semibold  pb-2 border-b border-gray-300 text-center" id="comment2">{text.comment2}</h1>
            </div>
            <div className="flex flex-col md:grid grid-cols-2 gap-10 md:gap-12 md:mx-32 md:px-20 my-10">
                <div className="flex flex-col px-6 md:px-10 border-x border-gray-300">
                    <div className="flex flex-row py-2 self-center">
                        <div className="h-16 w-16 relative"><Image src={image} alt="Image" fill={true} className="object-scale-down rounded-full"/></div>
                        <div className="flex flex-col px-2 prose">
                            <span className="text-lg font-bold" id="comment3">{text.comment3}</span>
                            <span className="text-gray-800 leading-tight text-sm" id="comment4">{text.comment4}</span>
                        </div>
                    </div>
                    <div className="prose antialiased py-2 text-center" id="comment5">{text.comment5}</div>
                </div>
                <div className="flex flex-col px-6 md:px-10 border-x border-gray-300">
                    <div className="flex flex-row py-2 self-center">
                        <div className="h-16 w-16 relative"><Image src={image} alt="Image" fill={true} className="object-scale-down rounded-full"/></div>
                        <div className="flex flex-col px-2 prose">
                            <span className="text-lg font-bold" id="comment6">{text.comment6}</span>
                            <span className="text-gray-800 leading-tight text-sm" id="comment7">{text.comment7}</span>
                        </div>
                    </div>
                    <div className="prose antialiased py-2 text-center" id="comment8">{text.comment8}</div>
                </div>
                <div className="flex flex-col px-6 md:px-10 border-x border-gray-300">
                    <div className="flex flex-row py-2 self-center">
                        <div className="h-16 w-16 relative"><Image src={image} alt="Image" fill={true} className="object-scale-down rounded-full"/></div>
                        <div className="flex flex-col px-2 prose">
                            <span className="text-lg font-bold" id="comment9">{text.comment9}</span>
                            <span className="text-gray-800 leading-tight text-sm" id="comment10">{text.comment10}</span>
                        </div>
                    </div>
                    <div className="prose antialiased py-2 text-center" id="comment11">{text.comment11}</div>
                </div>
                <div className="flex flex-col px-6 md:px-10 border-x border-gray-300">
                    <div className="flex flex-row py-2 self-center">
                        <div className="h-16 w-16 relative"><Image src={image} alt="Image" fill={true} className="object-scale-down rounded-full"/></div>
                        <div className="flex flex-col px-2 prose">
                            <span className="text-lg font-bold" id="comment12">{text.comment12}</span>
                            <span className="text-gray-800 leading-tight text-sm" id="comment13">{text.comment13}</span>
                        </div>
                    </div>
                    <div className="prose antialiased py-2 text-center" id="comment4">{text.comment14}</div>
                </div>
            </div>
            <div className="grow-1 h-full"></div>
        </div>
    )
}