import NewsItem from "../../components/newsItem";
import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import { kv } from '@vercel/kv';

export async function getStaticProps() {
  const rw = await kv.hgetall("rw")
  const gb = await kv.hgetall("gb")
  const data = {gb: gb, rw: rw}
  return {props: { data }}
}

export default function New({data}: any){
  const [lang, setLang] = useState("gb")
  useEffect(() => {
    const currentLang = window.localStorage.getItem("lang") || "gb"
    setLang(currentLang)
  }, []
  )
    return (
        <Layout language={lang}>
            <div>
                <NewsItem/>
            </div>
        </Layout>
    )
}