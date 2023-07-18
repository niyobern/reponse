import { useRouter } from 'next/router';
import Hero from '../components/hero';
import Services from '../components/services';
import MissionVission from '../components/missionVision';
import Layout from '../components/layout';
// import { handle, json, redirect } from 'next-runtime';
import { kv } from '@vercel/kv';
import {useEffect} from "react"

// export const getServerSideProps = handle({
//   async get({ cookies }: any) {
//     const lang = cookies.get("lang") || "gb"
//     // let  result = await kv.hgetall(lang)
//     // const data = JSON.stringify(result)
//     return json({lang});
//   },
//   async post({ req: { body }, cookies}: any) {
//     cookies.set("lang", body.lang)
//     return json({});
//   },
// });

export async function getStaticProps() {
  const rw = await kv.hgetall("rw")
  const gb = await kv.hgetall("gb")
  const data = {gb: gb, rw: rw}
  return {props: { data }}
}

export default function Home({ data } : any) {
  const lang = "gb"
  useEffect(() => {
    console.log(data[lang])
  }
  )
  const router = useRouter()
  return (
    <Layout language={lang}>
      <div>
        <Hero data={data[lang]}/>
        <Services data={data[lang]}/>
        <MissionVission data={data[lang]}/>
      </div>
    </Layout>
  );
}
