import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import axios from 'axios';

function MyApp({ Component, pageProps }: AppProps) {
  function doubleclick(e: any){
    e.target.contentEditable = true
    e.target.classList.add(..."focus:bg-gray-900 focus:text-white".split(" "))
    e.target.focus()
    const text = e.target.innerText
    e.target.addEventListener("blur", () => {
      e.target.contentEditable = false
      if (text !== e.target.innerText){
        const lang = window.localStorage.getItem("lang") || "gb"
        axios.post("/api/contents", {"lang": lang, "id": e.target.id, "data": e.target.innerText})
      }
    })
  }
  function handlethat(){
  //   document.addEventListener("click", () => {
    //   const body = document.body
    //   const elements = body.children[0].children[0].children[0].children[2].children
    //   for (let i=0; i<elements.length; i++){
    //     const el = elements[i]
    //     console.log(el.DOCUMENT_POSITION_CONTAINED_BY)
    //   }
    // })
    document.addEventListener("dblclick", doubleclick)
  }
  useEffect(handlethat)
  return (
    <Component {...pageProps}/>
  )
}

export default MyApp;
