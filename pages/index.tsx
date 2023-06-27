import path from "path"
import { useRouter } from 'next/router';
import Hero from '../components/hero';
import Services from '../components/services';
import MissionVission from '../components/missionVision';
import Layout from '../components/layout';
import { handle, json, redirect } from 'next-runtime';
import { readFile } from 'fs/promises';

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
