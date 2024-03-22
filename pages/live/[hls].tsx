import VideoJS from '../../components/VideoJS'
import { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import axios from "axios"

const VidPlay = () => {
  const playerRef = useRef(null);
  const slug = useRouter().query.hls;
  const [waiting, setWaiting] = useState(true)
  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
    {
      src: `https://playlists.berniyo.me/stream_${slug}.m3u8`,
      type :'application/x-mpegURL'
      // src: `https://playlists.berniyo.me/stream_${slug}.m3u8`,
      // type :'application/x-mpegURL'
    }]
  };
  useEffect(() => {
    axios.get(`https://playlists.berniyo.me/stream_${slug}.m3u8`)
    .then(res => setWaiting(false))
    const intervalId = setInterval(() => {
      axios.get(`https://live.berniyo.me/${slug}`)
      console.log('Running every 2 seconds...');
    }, 2000);

    return () => clearInterval(intervalId);
  })

  const handlePlayerReady = (player: any) => {
    playerRef.current = player;
    // // You can handle player events here, for example:
    // player.on('waiting', () => {
    //   Videojs.log('player is waiting');
    // });

    // player.on('dispose', () => {
    //   Videojs.log('player will dispose');
    // });
  };

  return (
    <>
      <Head>
       <title>Live Football</title>
      </Head>
      <div className='flex flex-col items-center'>
        <div className='w-full lg:w-10/12'>
          {waiting ? <div className="text-center text-xl font-medium py-20 px-4">For the first time, it takes some seconds to load ...</div> : <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />}
        </div>
      </div>
    </>
  );
}

export default VidPlay;
