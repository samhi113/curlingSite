import TitleCard from "../../components/TitleCard/TitleCard";
import * as pageStyles from "./history.module.css"

export default function history() {
    return(<div>
    <TitleCard 
        title="The History of Curling"
        author="Sam Higgins"
        backImg="curlingScience.webp"/>
    
    <main className={pageStyles.html}>
        <h3>Early Beginnings in Scotland</h3>
            <p>The earliest records of curling can be traced to 1511 when a curling stone was discovered inscribed with that year. By the 1600s, curling had become a popular winter activity among Scottish communities. The sport was initially informal, with games played on natural ice surfaces and using stones of varying sizes and shapes, often sourced from local riverbeds.</p>
        <h3>Standardization and Growth</h3>
            <p>The 18th and 19th centuries saw significant advancements in curling’s organization. In 1838, the Grand Caledonian Curling Club (now the Royal Caledonian Curling Club) was founded in Scotland to standardize rules and equipment. This period also saw the development of curling stones with handles and a more consistent size and shape, many of which were crafted from granite sourced from Ailsa Craig, an island in Scotland.</p>
            <p>As Scottish emigrants spread across the globe, they brought curling with them. The sport gained popularity in countries like Canada, the United States, and Sweden. Canada, in particular, embraced curling with fervor, establishing clubs and hosting competitions that would later position the country as a curling powerhouse.</p>
        <h3>Modernization and Olympic Recognition</h3>
            <p>The 20th century marked curling’s transition from a recreational activity to a competitive sport. Advances in ice-making technology and the invention of specialized curling brooms enhanced gameplay. The establishment of international competitions, such as the World Curling Championships, further elevated the sport's status.</p>
            <p>Curling made its Olympic debut as a demonstration sport in 1924 but did not gain official status until the 1998 Nagano Winter Olympics. Since then, the sport has grown in visibility and popularity, captivating audiences with its blend of precision, strategy, and teamwork.</p>
        <h3>Curling Today</h3>
            <p>Today, curling is played by millions worldwide, from amateur enthusiasts to elite athletes. Its inclusion in the Winter Olympics and the rise of televised competitions have introduced the sport to new audiences. Iconic moments, such as the dramatic “last-rock” victories and the precision of sweeping, have cemented curling’s place as a beloved winter sport.</p>
            <p>From its humble beginnings on frozen Scottish lochs to the grandeur of Olympic arenas, curling’s journey is a testament to its enduring appeal and cultural significance. Whether played for fun or on the world stage, curling continues to captivate with its unique blend of strategy, skill, and sportsmanship.</p>
    </main>
    </div>)
}