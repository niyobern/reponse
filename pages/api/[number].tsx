// pages/api/periodic-fetch.js
import axios from "axios";
export default async function handler(req: any, res: any) {
    const path = req.query.number
    const intervalId = setInterval(async () => {
      // Make your periodic HTTP request here
      axios.get(`https://live.berniyo.me/${path}`)
      .then((res:any) => console.log(res))
      .catch((err:any) => console.log("err"))
    }, 1000); // Adjust interval as needed
  
    res.status(200).json({ message: 'Periodic fetch started' });
  }
  