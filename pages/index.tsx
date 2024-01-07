import axios from "axios";
import Link from "next/link";

export async function getServerSideProps() {
    const ext = await axios.get("https://reponse_backend-1-r0934826.deta.app/stream/matches")
    const matches = ext.data.matches
    return {props: { matches }}
  }

export default function Home({ matches }: any ) {
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col w-fit px-2 md:px-10 py-4 lg:px-20 bg-gray-100 gap-4 items-center">
                <h1 className="text-xl font-bold text-bluee-900 text-center">Live TV</h1>
                <div className="flex flex-col gap-2 w-fit">
                    {matches.map((item: any, index: number) => (
                    <Link key={index} href={`/live/${item.id}`} className="text-gray-900">{item.text}</Link>
                    ))}
                </div>
            </div>
        </div>
    );
}