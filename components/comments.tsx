import Image from "next/image";
import image from "../public/images/picture.webp"

export default function Comments(){
    return (
        <div className="flex flex-col">
            <div className="flex flex-col items-center pt-10">
                <p className="leading-none text-lg text-fuchsia-500 uppercase font-medium">Do not just take our word for it</p>
                <h1 className="leading-tight text-3xl antialiased font-semibold  pb-2 border-b border-gray-300">See what others are saying</h1>
            </div>
            <div className="flex flex-col md:grid grid-cols-2 gap-10 md:gap-12 md:mx-32 md:px-20 my-10">
                <div className="flex flex-col px-6 md:px-10 border-x border-gray-300">
                    <div className="flex flex-row py-2 self-center">
                        <div className="h-16 w-16 relative"><Image src={image} alt="Image" fill={true} className="object-scale-down rounded-full"/></div>
                        <div className="flex flex-col px-2 prose">
                            <span className="text-lg font-bold">Bernard</span>
                            <span className="text-gray-800 leading-tight text-sm">CEO at Smaqui</span>
                        </div>
                    </div>
                    <div className="prose antialiased py-2 text-center">Recurrent neural networks, in general, are hard to train, because of the problem of vanishing activations and gradients we saw before.</div>
                </div>
                <div className="flex flex-col px-6 md:px-10 border-x border-gray-300">
                    <div className="flex flex-row py-2 self-center">
                        <div className="h-16 w-16 relative"><Image src={image} alt="Image" fill={true} className="object-scale-down rounded-full"/></div>
                        <div className="flex flex-col px-2 prose">
                            <span className="text-lg font-bold">Bernard</span>
                            <span className="text-gray-800 leading-tight text-sm">CEO at Smaqui</span>
                        </div>
                    </div>
                    <div className="prose antialiased py-2 text-center">Recurrent neural networks, in general, are hard to train, because of the problem of vanishing activations and gradients we saw before.</div>
                </div>
                <div className="flex flex-col px-6 md:px-10 border-x border-gray-300">
                    <div className="flex flex-row py-2 self-center">
                        <div className="h-16 w-16 relative"><Image src={image} alt="Image" fill={true} className="object-scale-down rounded-full"/></div>
                        <div className="flex flex-col px-2 prose">
                            <span className="text-lg font-bold">Bernard</span>
                            <span className="text-gray-800 leading-tight text-sm">CEO at Smaqui</span>
                        </div>
                    </div>
                    <div className="prose antialiased py-2 text-center">Recurrent neural networks, in general, are hard to train, because of the problem of vanishing activations and gradients we saw before.</div>
                </div>
                <div className="flex flex-col px-6 md:px-10 border-x border-gray-300">
                    <div className="flex flex-row py-2 self-center">
                        <div className="h-16 w-16 relative"><Image src={image} alt="Image" fill={true} className="object-scale-down rounded-full"/></div>
                        <div className="flex flex-col px-2 prose">
                            <span className="text-lg font-bold">Bernard</span>
                            <span className="text-gray-800 leading-tight text-sm">CEO at Smaqui</span>
                        </div>
                    </div>
                    <div className="prose antialiased py-2 text-center">Recurrent neural networks, in general, are hard to train, because of the problem of vanishing activations and gradients we saw before.</div>
                </div>
            </div>
            <div className="grow-1 h-full"></div>
        </div>
    )
}