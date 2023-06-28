import { NextApiRequest, NextApiResponse } from "next"
import { readFile, writeFile } from "fs/promises"
import path from "path"
import { kv } from "@vercel/kv"

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if (req.body.lang == "gb"){
        const data: any = await kv.hgetall("gb");
        data[req.body.id] = req.body.data;
        kv.hset("gb", data)
    } else {
        const data: any = await kv.hgetall("rw");
        data[req.body.id] = req.body.data;
        kv.hset("rw", data)

    }
    res.end("Okay")
}