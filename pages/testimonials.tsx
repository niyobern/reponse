import Comments from "../components/comments";
import Layout from "../components/layout";
import { handle, json, redirect } from 'next-runtime';
import { readFile } from 'fs/promises';

export const getServerSideProps = handle({
  async get({ cookies }: any) {
    const lang = cookies.get("lang")
    const data = lang == "gb" ? await readFile("./public/contents.json", {encoding: "utf-8"}): await readFile("./public/contentsKiny.json", {encoding: "utf-8"})
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