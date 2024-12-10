import TitleCard from "@/components/TitleCard/title";
import * as pageStyles from "./comp.module.css";

export default function CompanyPage() {
    return (<main className={pageStyles.html}>
        <TitleCard
            title="Major Curling Companies"
            author="Sam Higgins"
            backImg="tools.jpg" />
        
    </main>)
}