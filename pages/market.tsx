import Contactus from "../components/contactus";
import Layout from "../components/layout";
import { handle, json, redirect } from 'next-runtime';
import { readFile } from 'fs/promises';
import path from "path"

export const getServerSideProps = handle({
  async get({ cookies }: any) {
    const dir = path.join(process.cwd(), 'json')
    const lang = cookies.get("lang")
    const data = lang == "gb" ? await readFile(dir + "/contents.json", {encoding: "utf-8"}): await readFile(dir + "/contentsKiny.json", {encoding: "utf-8"})
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