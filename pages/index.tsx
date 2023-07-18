import { useRouter } from 'next/router';
import Hero from '../components/hero';
import Services from '../components/services';
import MissionVission from '../components/missionVision';
import Layout from '../components/layout';
import { handle, json, redirect } from 'next-runtime';
import { kv } from '@vercel/kv';

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
  return {props: { gb: gb }}
}

export default function Home({ gb }: any) {
  const lang = "gb"
  const router = useRouter()
  return (
    <Layout language={lang}>
      <div>
        <Hero data={gb}/>
        <Services data={gb}/>
        <MissionVission data={gb}/>
      </div>
    </Layout>
  );
}
