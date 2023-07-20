import Layout from "../components/layout"
import TeamComponent from "../components/team"
import { kv } from '@vercel/kv';
import { useState, useEffect } from "react";
export async function getStaticProps() {
  const rw = await kv.hgetall("rw")
  const gb = await kv.hgetall("gb")
  const data = {gb: gb, rw: rw}
  return {props: { data }}
}
export default function TeamPage(){
  const [lang, setLang] = useState("gb")
  useEffect(() => {
    const currentLang = window.localStorage.getItem("lang") || "gb"
    setLang(currentLang)
  }, []
  )
    return (
        <Layout language={lang}>
          <div>
            <TeamComponent/>
          </div>
        </Layout>
    )
}