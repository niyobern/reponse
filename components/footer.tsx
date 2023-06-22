import Link from "next/link"
import Image from "next/image"
import facebook from "../public/images/facebook.png"
import twitter from "../public/images/twitter.png"
import linkedin from "../public/images/linkedin.png"

export default function Footer(){
    return (<div className="flex flex-col bg-green-300 border-t border-white w-full order-3">
        <div className="flex flex-col md:flex-row text-2xl gap-4 text-blue-900 font-medium mb-11 md:mb-0 p-4 items-center justify-between">
            <p className="order-2 md:order-1">© Ecogenius Conserve 2023</p>
            <div className="list-disc gap-6 flex order-1 md:order-2">
                <a href="https://linkedin.com/in/ecogenius-conserve-610a67275"><Image height={32} width={32} src={linkedin} alt="Linkedin icon"></Image></a>
                <a href="https://twitter.com/EcogeniusC "><Image height={32} width={32} src={twitter} alt="Twitter icon"></Image></a>
                <a href="https://www.facebook.com/profile.php?id=100093036820473"><Image height={32} width={32} src={facebook} alt="Facebook icon"></Image></a>
            </div>
        </div>
    </div>
    )
}