import NewsGrid from "../components/NewsGrid";
import Layout from "../components/layout";
import { kv } from '@vercel/kv';
import { useEffect, useState } from "react";

export async function getStaticProps() {
  const rw = await kv.hgetall("rw")
  const gb = await kv.hgetall("gb")
  const data = {gb: gb, rw: rw}
  return {props: { data }}
}

export default function Extension(){
  const [lang, setLang] = useState("gb")
  useEffect(() => {
    const currentLang = window.localStorage.getItem("lang") || "gb"
    setLang(currentLang)
  }, []
  )
    return (
    <Layout language={lang}>
        <div className="h-full">
          {"No Content" || "<NewsGrid/>"}
        </div>
    </Layout>
    )
}
