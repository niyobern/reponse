import axios from "axios";

export default function Home({ data }) {
    return (
        <div>
        <h1>Home Page</h1>
        <ul>
            {data.map((item) => (
            <li key={item.id}>{item.title}</li>
            ))}
        </ul>
        </div>
    );
}