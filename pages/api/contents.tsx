import { NextApiRequest, NextApiResponse } from "next"
import { readFile, writeFile } from "fs/promises"

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const rawData = await readFile("./components/contents.json", {encoding: "utf-8"})
    const data = JSON.parse(rawData)
    data[req.body.id] = req.body.data
    const json = JSON.stringify(data)
    if (data.lang == "gb"){
        writeFile("./components/contents.json", json, {encoding: "utf-8"})
    } else {
        writeFile("./components/contentsKiny.json", json, {encoding: "utf-8"})
    }
    res.end("OKay")
}