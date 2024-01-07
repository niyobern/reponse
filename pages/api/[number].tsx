// pages/api/periodic-fetch.js
export default async function handler(req, res) {
    const path = req.query.number
    const intervalId = setInterval(async () => {
      // Make your periodic HTTP request here
      await fetch(`https://live.berniyo.me/${path}`);
    }, 1000); // Adjust interval as needed
  
    res.status(200).json({ message: 'Periodic fetch started' });
  }
  