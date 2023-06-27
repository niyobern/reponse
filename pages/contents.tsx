
import { handle, json } from "next-runtime";
import { readFile } from "fs/promises";

export const getServerSideProps = handle({
    async get({ cookies }: any) {
      const lang = cookies.get("lang")
      const data = lang == "gb" ? await readFile("./public/contents.json", {encoding: "utf-8"}): await readFile("./public/contentsKiny.json", {encoding: "utf-8"})
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