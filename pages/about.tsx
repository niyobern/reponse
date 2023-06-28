import Aboutus from "../components/aboutus";
import TeamComponent from "../components/team";
import Layout from "../components/layout";
import { handle, json, redirect } from 'next-runtime';
import { kv } from '@vercel/kv';

export const getServerSideProps = handle({
  async get({ cookies }: any) {
    const lang = cookies.get("lang")
    let  result = await kv.hgetall(lang || "gb")
    const data = JSON.stringify(result)
    return json({data, lang});
  },
  async post({ req: { body }, cookies}: any) {
    cookies.set("lang", body.lang)
    return json({});
  },
});

export default function About({ data, lang }: any){
    return (
      <Layout language={lang}>
        <div className="h-full flex flex-col">
            <Aboutus data={data}/>
            <TeamComponent/>
        </div>
      </Layout>
    )
}