import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { useState } from 'react';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }: AppProps) {
  const [page, setPage] = useState("Home")
  function handlePage(page: string){
    setPage(page)
  }
  return (<Layout page={page}>
    <Component {...pageProps} handlePage={handlePage}/>
  </Layout>
  )
}

export default MyApp;
