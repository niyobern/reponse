import Contactus from "../components/contactus";
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

export default function contact({ data, lang }: any){
    return (
        <Layout>
            <div className="h-full">
                <div>No Product</div>
            </div>
        </Layout>
        
    )
}