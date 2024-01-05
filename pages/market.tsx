import Layout from "../components/layout";
import { useEffect, useState} from "react"
import axios from "axios";
import Image from "next/image";

export async function getServerSideProps() {
  const ext = await axios.get("https://reponse_backend-1-r0934826.deta.app/market")
  const market = ext.data
  return {props: { market }}
}

export default function Market({ market }: any){
  const [lang, setLang] = useState("gb")
  useEffect(() => {
    const currentLang = window.localStorage.getItem("lang") || "gb"
    setLang(currentLang)
  }, []
  )
    return (
        <Layout language={lang}>
            <div className="h-full">
                <div className="flex flex-col md:grid grid-cols-3">
                  {market.map((item: any) => (
                    <div key={item.key} className="flex flex-col p-2 gap-2">
                      <h1 className="text-blue-900 text-lg font-medium">{item.name}</h1>
                      <Image src={`https://reponse_backend-1-r0934826.deta.app/images/view/${item.images[0]}`} width={300} height={300} alt="image"/>
                      <p className="text-gray-900 text-sm text-justify">{item.description}</p>
                      <div className="bg-blue-900 text-xl font-medium text-white w-full text-center py-1">{item.price}</div>
                    </div>
                  ))}
                </div>
            </div>
        </Layout>
        
    )
}