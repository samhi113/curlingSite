import TitleCard from "@/components/TitleCard/TitleCard";
import * as pageStyles from "./comp.module.css";

export default function CompanyPage() {
    return (<main className={pageStyles.html}>
        <TitleCard
            title="Major Curling Companies"
            author="Sam Higgins"
            backImg="tools.jpg" />
        
        <h3>Shoes</h3>
        <p>Three major companies for shoes are Goldline, Asham, and BalancePlus. Goldline and Asham are both cheaper, entry-level shoes that will work well for a couple years. BalancePlus are more for hobbyists and frequent flyers, costing more but lasting much longer. Many professionals will find specific nuances in each shoe, and often pick one that fits their play style much better.</p>

        <h3>Brooms and Heads</h3>
        <p>The three above also have space in the broom market, as well as EndGame. Each have different models for different styles of play, with different </p>
    </main>)
}