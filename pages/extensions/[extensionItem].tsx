import NewsItem from "../../components/newsItem";
import { useRouter } from "next/router";

export default function New(){
    const router = useRouter();
    const slug = router.query.extensionItem
    return (
        <div>
            <NewsItem/>
        </div>
    )
}