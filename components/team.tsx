import Image from "next/image"
import avatar from "../public/images/picture.webp"
import facebook from "../public/images/facebook.png"
import twitter from "../public/images/twitter.png"
import linkedin from "../public/images/linkedin.png"

export default function TeamComponent(){
    return (
        <div className="bg-green-600 -mt-8 md:mt-0">
            <h1 className="text-4xl font-bold text-center text-white py-4">Meet Our Team</h1>
            <div className="flex flex-col md:flex-row gap-4 md:gap-0 flex-wrap justify-center">
           {/* <!-- Team member card --> */}
          <div className="w-full md:w-1/4 bg-white rounded overflow-hidden shadow-lg md:m-4 flex flex-col justify-between">
            <Image height={500} width={500} className="w-full rounded-full px-2 md:px-4" src={avatar} alt="Team member photo"></Image>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">John Doe</div>
              <p className="text-gray-700 text-base">Web developer and designer</p>
            </div>
            <div className="px-6 py-4 flex justify-center">
                    {/* <!-- Social icons --> */}
                    <a href="#" className="mx-2"><Image height={32} width={32} src={twitter} alt="Twitter icon"></Image></a>
                    <a href="#" className="mx-2"><Image height={32} width={32} src={linkedin} alt="LinkedIn icon"></Image></a>
                    <a href="#" className="mx-2"><Image height={32} width={32} src={facebook} alt="Facebook icon"></Image></a>
            </div>
          </div>
          <div className="w-full md:w-1/4 bg-white rounded overflow-hidden shadow-lg md:m-4 flex flex-col justify-between">
            <Image height={500} width={500} className="w-full rounded-full px-2 md:px-4" src={avatar} alt="Team member photo"></Image>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Jane Doe</div>
              <p className="text-gray-700 text-base">Data analyst and machine learning engineer</p>
            </div>
            <div className="px-6 py-4 flex justify-center">
                    {/* <!-- Social icons --> */}
                    <a href="#" className="mx-2"><Image height={32} width={32} src={twitter} alt="Twitter icon"></Image></a>
                    <a href="#" className="mx-2"><Image height={32} width={32} src={linkedin} alt="LinkedIn icon"></Image></a>
                    <a href="#" className="mx-2"><Image height={32} width={32} src={facebook} alt="Facebook icon"></Image></a>
            </div>
          </div>
          <div className="w-full md:w-1/4 bg-white rounded overflow-hidden shadow-lg md:m-4 flex flex-col justify-between">
            <Image height={500} width={500} className="w-full rounded-full px-2 md:px-4" src={avatar} alt="Team member photo"></Image>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Bob Doe</div>
              <p className="text-gray-700 text-base">Marketing manager and content writer</p>
            </div>
            <div className="px-6 py-4 flex justify-center">
                    {/* <!-- Social icons --> */}
                    <a href="#" className="mx-2"><Image height={32} width={32} src={twitter} alt="Twitter icon"></Image></a>
                    <a href="#" className="mx-2"><Image height={32} width={32} src={linkedin} alt="LinkedIn icon"></Image></a>
                    <a href="#" className="mx-2"><Image height={32} width={32} src={facebook} alt="Facebook icon"></Image></a>
            </div>
          </div>
        </div>
      </div>
    )
}