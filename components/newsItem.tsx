import Image from "next/image"
import image from "../public/images/hubspot.jpg"
import Link from "next/link"

export default function NewsItem(){
    return (
        <div className="flex flex-col md:grid grid-cols-6 p-2 gap-4">
            <div className="col-start-1 col-span-4 h-fit flex flex-col">
                <Image src={image} alt="image" width={900} height={500} className="w-full h-fit object-scale-down"/>
                <h1 className="text-2xl py-2 font-bold text-blue-800">Sample extension with image</h1>
                <div className="antialiased leading-tight text-gray-800 text-justify">The problem was that the smaller datasets didn’t generalize effectively to the large ImageNet dataset. The approaches that worked well on ImageNet generally had to be developed and trained on ImageNet. This led to many people believing that only researchers with access to giant computing resources could effectively contribute to developing image classification algorithms. <br/> <br/> We thought that seemed very unlikely to be true. We had never seen a study that showed that ImageNet happens to be exactly the right size, and that other datasets could not be developed that would provide useful insights. So we wanted to create a new dataset that researchers could test their algorithms on quickly and cheaply, but that would also provide insights likely to work on the full ImageNet dataset. <br/> <br/>About three hours later, we had created Imagenette. We selected 10 classes from the full ImageNet that looked very different from one another. As we had hoped, we were able to quickly and cheaply create a classifier capable of recognizing these classes. We then tried out a few algorithmic tweaks to see how they impacted Imagenette. We found some that worked pretty well, and tested them on ImageNet as well—and we were pleased to find that our tweaks worked well on ImageNet too! <br/> <br/>There is an important message here: the dataset you are given is not necessarily the dataset you want. It’s particularly unlikely to be the dataset that you want to do your development and prototyping in. You should aim to have an iteration speed of no more than a couple of minutes—that is, when you come up with a new idea you want to try out, you should be able to train a model and see how it goes within a couple of minutes. If it’s taking longer to do an experiment, think about how you could cut down your dataset, or simplify your model, to improve your experimentation speed. The more experiments you can do, the better! <br/></div>
            </div>
            <div className="col-start-5 col-span-2 flex flex-col gap-4 pb-8">
                <Link href="/" passHref={true}>
                    <div className="grid grid-rows-6 grid-cols-2 relative shadow shadow-2xl text-white bg-green-900 hover:bg-green-600 active:bg-red-900 hover:shadow shadow-sky-600">
                        <Image src={image} alt="image" width={900} height={500} className="w-full col-span-full row-span-6 z-10"/>
                        <div className="w-full bg-opacity-80 col-span-full row-start-5 row-span-2 bg-inherit py-2 absolute bottom-0 z-20">
                            <h1 className="text-center self-center cursor-pointer">mean and standard deviation are not very close</h1>
                        </div>
                    </div>
                </Link>
                <Link href="/" passHref={true}>
                    <div className="grid grid-rows-6 grid-cols-2 relative shadow shadow-2xl text-white bg-green-900 hover:bg-green-600 active:bg-red-900 hover:shadow shadow-sky-600">
                        <Image src={image} alt="image" width={900} height={500} className="w-full col-span-full row-span-6 z-10"/>
                        <div className="w-full bg-opacity-80 col-span-full row-start-5 row-span-2 bg-inherit py-2 absolute bottom-0 z-20">
                            <h1 className="text-center self-center cursor-pointer">mean and standard deviation are not very close</h1>
                        </div>
                    </div>
                </Link>
                <Link href="/" passHref={true}>
                    <div className="grid grid-rows-6 grid-cols-2 relative shadow shadow-2xl text-white bg-green-900 hover:bg-green-600 active:bg-red-900 hover:shadow shadow-sky-600">
                        <Image src={image} alt="image" width={900} height={500} className="w-full col-span-full row-span-6 z-10"/>
                        <div className="w-full bg-opacity-80 col-span-full row-start-5 row-span-2 bg-inherit py-2 absolute bottom-0 z-20">
                            <h1 className="text-center self-center cursor-pointer">mean and standard deviation are not very close</h1>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}