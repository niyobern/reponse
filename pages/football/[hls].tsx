import VideoJS from '../../components/VideoJS'
import { useRef } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const VidPlay = () => {
  const playerRef = useRef(null);
  const slug = useRouter().query.hls;
  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: `https://reponse_backend-1-r0934826.deta.app/stream/list/${slug}.m3u8`,
      type :'application/x-mpegURL'
    }]
  };

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
       <title>visit www.jiprovisional.com</title>
      </Head>
      <div className='flex flex-col items-center'>
        <div className='w-full lg:w-10/12'>
            <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        </div>
      </div>
    </>
  );
}

export default VidPlay;