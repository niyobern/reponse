import Image from "next/image"
import avatar2 from "../public/images/Youth Connect pic.jpg"
import avatar1 from "../public/images/IMG-20230630-WA0000.jpg"
import avatar3 from "../public/images/Thadee.jpg"
import avatar4 from "../public/images/Youth Connect pic2.jpg"
import facebook from "../public/images/facebook.png"
import twitter from "../public/images/twitter.png"
import linkedin from "../public/images/linkedin.png"

export default function TeamComponent(){
    return (
        <div className="bg-green-600 -mt-8 md:mt-0">
            <h1 className="text-4xl font-bold text-center text-white py-4">Meet Our Team</h1>
            <div className="flex flex-col md:flex-row gap-4 md:gap-0 flex-wrap justify-center">
           {/* <!-- Team member card --> */}
          <div className="w-full md:w-1/5 bg-white rounded overflow-hidden shadow-lg md:m-4 flex flex-col justify-between">
            <Image height={100} width={100} className="w-full h-full rounded-full px-2 md:px-4" src={avatar1} alt="Team member photo"></Image>
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
          <div className="w-full md:w-1/5 bg-white rounded overflow-hidden shadow-lg md:m-4 flex flex-col justify-between">
            <Image height={100} width={100} className="w-full h-full rounded-full px-2 md:px-4" src={avatar2} alt="Team member photo"></Image>
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
          <div className="w-full md:w-1/5 bg-white rounded overflow-hidden shadow-lg md:m-4 flex flex-col justify-between">
            <Image height={100} width={100} className="w-full h-full rounded-full px-2 md:px-4" src={avatar3} alt="Team member photo"></Image>
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
          <div className="w-full md:w-1/5 bg-white rounded overflow-hidden shadow-lg md:m-4 flex flex-col justify-between">
            <Image height={100} width={100} className="w-full h-full rounded-full px-2 md:px-4" src={avatar4} alt="Team member photo"></Image>
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
