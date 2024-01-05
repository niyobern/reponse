import Opportunity from "../components/opportunity";
import Layout from "../components/layout";
import { useEffect, useState } from "react";
import axios from "axios";

export async function getServerSideProps() {
  const data = await axios.get("https://reponse_backend-1-r0934826.deta.app/opportunities") 
  const opportuities = data.data
  return {props: { opportuities }}
}

export default function Opportunities({ opportunities }: any){
  const [lang, setLang] = useState("gb")
  useEffect(() => {
    const currentLang = window.localStorage.getItem("lang") || "gb"
    setLang(currentLang)
  }, []
  )
    return (
      <Layout language={lang}>
      <div className="h-full flex w-full justify-center">
          <div className="w-full md:w-9/12 lg:w-1/2 flex flex-col">
           {opportunities.map((opportunity: any) => <Opportunity key={opportunity.key} opportunity={opportunity}/>)}
          </div>
      </div>
  </Layout>
    )
    }
