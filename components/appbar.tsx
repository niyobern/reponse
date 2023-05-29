import Image from "next/image"
import logo from "../public/images/logo.png"
import "node_modules/flag-icons/css/flag-icons.min.css"

export default function AppBar({ page }: any){
    const menu = ["Home", "Extension", "Marketing", "About", "Contact", "Testimonials"]

    return (<div className="mb-0 flex flex-row md:hidden items-center justify-between sticky z-50 order-first top-0 w-full bg-cyan-900 shadow rounded-b">
        <div className="px-1 flex md:hidden justify-between h-10 items-center w-full">
            <Image src={logo} alt="logo" className="h-8 w-auto bg-white rounded-full"/>
            <span className="fi fi-gb text-xl"/>
        </div>
    </div>
    )
}