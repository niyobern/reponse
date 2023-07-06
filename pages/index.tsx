import { useRouter } from 'next/router';
import Hero from '../components/hero';
import Services from '../components/services';
import MissionVission from '../components/missionVision';
import Layout from '../components/layout';
import { handle, json, redirect } from 'next-runtime';
import { kv } from '@vercel/kv';

export const getServerSideProps = handle({
  async get({ cookies }: any) {
    const lang = cookies.get("lang") || "gb"
    let  result = await kv.hgetall(lang)
    const data = JSON.stringify(result)
    return json({data, lang});
  },
  async post({ req: { body }, cookies}: any) {
    cookies.set("lang", body.lang)
    return json({});
  },
});

export default function Home({ data, lang }: any) {
  const router = useRouter()
  return (
    <Layout language={lang}>
      <div>
        <Hero data={data}/>
        <Services data={data}/>
        <MissionVission data={data}/>
      </div>
    </Layout>
  );
}
