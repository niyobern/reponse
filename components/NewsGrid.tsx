import Image from "next/image"
import image from "../public/images/extension.png"

export default function NewsGrid(){
    return (
        <div className="p-2 md:p-12 md:px-24 flex flex-col md:grid grid-cols-2 gap-4 md:gap-12">
            <div className="flex flex-col items-start w-full shadow-lg pb-4 px-2">
                <div className="text-2xl font-semibold mb-4 text-gray-900">Conservation Agriculture</div>
                <Image src={image} alt="image" width={500} height={500} className="w-full max-h-[40vh] rounded"/>
                <p className="my-4 text-gray-700 w-full leading-normal text-justify">Recurrent neural networks, in general, are hard to train, because of the problem of vanishing activations and gradients we saw before. Using LSTM (or GRU) cells makes training easier than with vanilla RNNs, but they are still very prone to overfitting. Data augmentation, while a possibility, is less often used for text data than for images because in most cases it requires another model to generate random augmentations</p>
                <div className="text-white font-medium py-2 px-6 bg-green-600 rounded">Read more</div>
            </div>
            <div className="flex flex-col items-start w-full shadow-lg pb-4 px-2">
                <div className="text-2xl font-semibold mb-4 text-gray-900">Conservation Agriculture</div>
                <Image src={image} alt="image" width={500} height={500} className="w-full md:max-h-[40vh] rounded"/>
                <p className="my-4 text-gray-700 w-full leading-normal text-justify">Recurrent neural networks, in general, are hard to train, because of the problem of vanishing activations and gradients we saw before. Using LSTM (or GRU) cells makes training easier than with vanilla RNNs, but they are still very prone to overfitting. Data augmentation, while a possibility, is less often used for text data than for images because in most cases it requires another model to generate random augmentations</p>
                <div className="text-white font-medium py-2 px-6 bg-green-600 rounded">Read more</div>
            </div>
        </div>
    )
}