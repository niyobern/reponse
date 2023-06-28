import { handle, json } from "next-runtime";
import { readFile } from "fs/promises";
import { kv } from '@vercel/kv';

export const getServerSideProps = handle({
  async get({ cookies }: any) {
    const lang = cookies.get("lang")
    let  result = await kv.hgetall(lang || "gb")
    const data = JSON.stringify(result)
    return json({data, lang});
  },
    async post({ req: { body }, cookies}: any) {
      console.log(body)
      cookies.set("lang", body.lang)
      return json({});
    },
  });
export default function Contents({ data, lang }: any){
    return <div>{lang} {data}</div>
}