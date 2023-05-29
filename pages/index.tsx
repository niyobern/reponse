import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { handle, json, redirect } from 'next-runtime';
import { useFormSubmit, Form } from 'next-runtime/form';
import Hero from '../components/hero';
import Services from '../components/services';
import MissionVission from '../components/missionVision';

// export const getServerSideProps = handle({
//   async get() {
//     return json({});
//   },
//   async post({ req: { body }, cookies}: any) {
//     const result = await axios.post(`${baseUrl}/login`, body, {headers : {"content-type": "multipart/form-data"}})
//     const token = result.data
//     cookies.set("token", token)
//     const user = await axios.get(`${baseUrl}/users/current`, {headers: {"Authorization": token}})
//     const user_info = user.data
//     const role = user_info.role
//     cookies.set("role", role)
//     return redirect("/home", {permanent: true});
//   },
// });

export default function Home({handlePage}: any) {
  handlePage("Home")
  const fields = ["Email or Phone ", "Password"]

  const router = useRouter()
  const [show, setShow] = useState(false)
  const [succeded, setSucceded] = useState(false)
  const form = useFormSubmit()
  useEffect(() => {
    if (form.isError){
      setShow(true)
    };
    if (form.isSuccess){
      setShow(false)
      setSucceded(true)
    }
  }, [form, router]);
  function handleShow(){
    setSucceded(false)
    setShow(true)
  }
  function handleSucces(){
    setShow(false)
  }
  return (
    <div>
      <Hero/>
      <Services/>
      <MissionVission/>
    </div>
  );
}
