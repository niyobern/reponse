import Contactus from "../components/contactus";
import Layout from "../components/layout";
import { useEffect, useState } from "react";
import { kv } from '@vercel/kv';

export async function getStaticProps() {
  const rw = await kv.hgetall("rw")
  const gb = await kv.hgetall("gb")
  const data = {gb: gb, rw: rw}
  return {props: { data }}
}

export default function ContactPage({ data }: any){
  const [lang, setLang] = useState("gb")
  useEffect(() => {
    const currentLang = window.localStorage.getItem("lang") || "gb"
    setLang(currentLang)
  }, []
  )
    return (
      <Layout language={lang}>
        <div className="h-fit flex flex-col">
            <Contactus data={JSON.stringify(data[lang])}/>
        </div>
      </Layout>
    )
}