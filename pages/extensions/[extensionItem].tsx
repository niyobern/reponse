import NewsItem from "../../components/newsItem";
import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import { kv } from '@vercel/kv';
import axios from "axios";

export async function getServerSideProps() {
  const ext = await axios.get("https://reponse_backend-1-r0934826.deta.app/extensions")
  const extensions = ext.data
  return {props: { extensions }}
}

export default function News({ extensions }: any){
  const [lang, setLang] = useState("gb")
  useEffect(() => {
    const currentLang = window.localStorage.getItem("lang") || "gb"
    setLang(currentLang)
  }, []
  )
    return (
        <Layout language={lang}>
            <div>
                <NewsItem extensions={extensions}/>
            </div>
        </Layout>
    )
}