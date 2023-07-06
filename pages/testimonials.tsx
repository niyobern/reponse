import Comments from "../components/comments";
import Layout from "../components/layout";
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

export default function Testimonials({ data, lang }: any){
    return (
      <Layout>
        <div className="h-full">
          <Comments data={data}/>
        </div>
      </Layout>
    )
}