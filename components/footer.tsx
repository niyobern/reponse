import Link from "next/link"

export default function Footer(){
    return (<div className="flex flex-col bg-green-300 border-t border-white w-full order-3">
        <div className="flex flex-col md:flex-row text-2xl gap-4 text-blue-900 font-medium mb-11 md:mb-0 p-4 items-center justify-between">
            <p className="order-2 md:order-1">© Ecogenius Conserve 2023</p>
            <div className="list-disc gap-6 flex order-1 md:order-2">
                <a href="https://linkedin.com/in/ecogenius-conserve-610a67275"><svg className="w-8 h-8 text-blue-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" ></path> </svg></a>
                <a href="https://twitter.com/EcogeniusC "><svg className="h-8 w-8 text-sky-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z" /></svg></a>
                <a href="https://www.facebook.com/profile.php?id=100093036820473"><svg className="h-8 w-8 text-blue-700"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg></a>
            </div>
        </div>
    </div>
    )
}