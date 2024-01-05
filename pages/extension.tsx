import NewsGrid from "../components/NewsGrid";
import Layout from "../components/layout";
import { kv } from '@vercel/kv';
import { useEffect, useState } from "react";
import axios from "axios";

export async function getServerSideProps() {
  const ext = await axios.get("https://reponse_backend-1-r0934826.deta.app/extensions")
  const extensions = ext.data
  return {props: { extensions }}
}

export default function Extension({ extensions }: any){
  const [lang, setLang] = useState("gb")
  useEffect(() => {
    const currentLang = window.localStorage.getItem("lang") || "gb"
    setLang(currentLang)
  }, []
  )
    return (
    <Layout language={lang}>
        <div className="h-full">
          <NewsGrid extensions={extensions}/>
        </div>
    </Layout>
    )
}
