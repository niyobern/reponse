import ScheduleComponent from "../components/schedule"
import axios from "axios"

export async function getServerSideProps() {
    const ext = await axios.get("https://reponse_backend-1-r0934826.deta.app/stream/matches")
    const matches = ext.data.matches
    return {props: { matches }}
  }

export default function Live({matches}: any){
    return (
        <ScheduleComponent data={matches}/>
    )
}