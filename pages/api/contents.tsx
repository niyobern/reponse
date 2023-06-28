import { NextApiRequest, NextApiResponse } from "next"
import { readFile, writeFile } from "fs/promises"
import path from "path"

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const dir = path.join(process.cwd(), 'json')
    if (req.body.lang == "gb"){
        const rawData = await readFile(dir + "/contents.json", {encoding: "utf-8"})
        const data = JSON.parse(rawData)
        data[req.body.id] = req.body.data
        const json = JSON.stringify(data)
        writeFile(dir + "/contents.json", json, {encoding: "utf-8"})
    } else {
        const rawData = await readFile(dir + "/contentsKiny.json", {encoding: "utf-8"})
        const data = JSON.parse(rawData)
        data[req.body.id] = req.body.data
        const json = JSON.stringify(data)
        writeFile(dir + "/contentsKiny.json", json, {encoding: "utf-8"})
    }
    res.end("OKay")
}