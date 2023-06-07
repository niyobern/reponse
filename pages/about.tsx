import Aboutus from "../components/aboutus";
import TeamComponent from "../components/team";

export default function About(){
    return (
        <div className="h-full flex flex-col">
            <Aboutus/>
            <TeamComponent/>
        </div>
    )
}