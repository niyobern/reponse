import Image from "next/image"
import avatar3 from "../public/images/Youth Connect pic.jpg"
import avatar1 from "../public/images/IMG-20230630-WA0000.jpg"
import avatar2 from "../public/images/Thadee.jpg"
import avatar4 from "../public/images/20230723_171435.jpg"
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
              <div className="font-bold text-xl mb-2">Iradukunda Reponse</div>
              <p className="text-gray-700 text-base">Co-founder and CEO</p>
            </div>
            <div className="px-6 py-4 flex justify-center">
                    {/* <!-- Social icons --> */}
                    <a href="https://twitter.com/repoiradukunda/" className="mx-2"><Image height={32} width={32} src={twitter} alt="Twitter icon"></Image></a>
                    <a href="https://www.linkedin.com/in/iradukunda-reponse-92728a232" className="mx-2"><Image height={32} width={32} src={linkedin} alt="LinkedIn icon"></Image></a>
                    <a href="https://www.facebook.com/iradukunda.reponseeagle" className="mx-2"><Image height={32} width={32} src={facebook} alt="Facebook icon"></Image></a>
            </div>
          </div>
          <div className="w-full md:w-1/5 bg-white rounded overflow-hidden shadow-lg md:m-4 flex flex-col justify-between">
            <Image height={100} width={100} className="w-full h-full rounded-full px-2 md:px-4" src={avatar2} alt="Team member photo"></Image>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Ubayeho Thadee</div>
              <p className="text-gray-700 text-base">Co-founder and CEO </p>
            </div>
            <div className="px-6 py-4 flex justify-center">
                    {/* <!-- Social icons --> */}
                    <a href="http://linkedin.com/in/thadee-ubayeho-95152a22b" className="mx-2"><Image height={32} width={32} src={twitter} alt="Twitter icon"></Image></a>
                    <a href="https://twitter.com/UbayehoThadee" className="mx-2"><Image height={32} width={32} src={linkedin} alt="LinkedIn icon"></Image></a>
                    <a href="https://www.facebook.com/thau.man.904" className="mx-2"><Image height={32} width={32} src={facebook} alt="Facebook icon"></Image></a>
            </div>
          </div>
          <div className="w-full md:w-1/5 bg-white rounded overflow-hidden shadow-lg md:m-4 flex flex-col justify-between">
            <Image height={100} width={100} className="w-full h-full rounded-full px-2 md:px-4" src={avatar3} alt="Team member photo"></Image>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Utetiwabo Adeline</div>
              <p className="text-gray-700 text-base">Co-founder and CEO</p>
            </div>
            <div className="px-6 py-4 flex justify-center">
                    {/* <!-- Social icons --> */}
                    <a href="https://twitter.com/UtetiwaboAdeli1" className="mx-2"><Image height={32} width={32} src={twitter} alt="Twitter icon"></Image></a>
                    <a href="https://www.linkedin.com/in/utetiwabo-adeline-6323aa234/" className="mx-2"><Image height={32} width={32} src={linkedin} alt="LinkedIn icon"></Image></a>
                    <a href="https://www.facebook.com/adeline.uteta.5" className="mx-2"><Image height={32} width={32} src={facebook} alt="Facebook icon"></Image></a>
            </div>
          </div>                
          <div className="w-full md:w-1/5 bg-white rounded overflow-hidden shadow-lg md:m-4 flex flex-col justify-between">
            <Image height={100} width={100} className="w-full h-full rounded-full px-2 md:px-4" src={avatar4} alt="Team member photo"></Image>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Kamanzi Claudine</div>
              <p className="text-gray-700 text-base">Co-found and CEO</p>
            </div>
            <div className="px-6 py-4 flex justify-center">
                    {/* <!-- Social icons --> */}
                    <a href="https://twitter.com/kamanzi_claudin" className="mx-2"><Image height={32} width={32} src={twitter} alt="Twitter icon"></Image></a>
                    <a href="https://www.linkedin.com/in/kamanzi-claudine-5b794b1b1/" className="mx-2"><Image height={32} width={32} src={linkedin} alt="LinkedIn icon"></Image></a>
                    <a href="#" className="mx-2"><Image height={32} width={32} src={facebook} alt="Facebook icon"></Image></a>
            </div>
          </div>
        </div>
      </div>
    )
}
