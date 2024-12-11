import TitleCard from "@/components/TitleCard/title.js";
import * as pageStyles from "./shuffle.module.css";

export default function Shuffleboard() {
    return (<div>
        <TitleCard
            title="Shuffleboard v Curling"
            author="Sam Higgins"
            backImg="shuffleboard.webp" />

        <main className={pageStyles.html}>
            <h3>Shuffleboard?</h3>
            <p>Shuffleboard is a popular tabletop game of accuracy that has drawn many comparisons to curling. The aim of shuffleboard is for each player to throw stones at the opponent's side of the table, with the closer you are to the end of the table earning more points.</p>

            <h3>Similarities</h3>
            <ul>
                <li>Both games are skill-based, accuracy-oriented games</li>
                <li>Both involve stones aiming at a target area</li>
                <li>Surfaces can be smoothened to enhance stone travel.</li>
            </ul>

            <h3>Differences</h3>
            <ul>
                <li>Wood surface in shuffleboard, ice for curling</li>
                <li>Scale: Shuffleboard is a tabletop game, curling is on a much larger, human scale.</li>
                <li>How to win: Shuffleboard is a game oriented around scoring more points, where as curling is who can get closer to the target.</li>
            </ul>
        </main>
    </div>)
}