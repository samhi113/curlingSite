import * as pageStyles from './usa.module.css';

export default function USA(){
    return(
        <main className={pageStyles.main}>
            <header className={pageStyles.mainHeader}>
               <h1 className={pageStyles.headerText}>USA Olympic Teams</h1> 
            </header>
            <article className={pageStyles.container}>
                <section className={pageStyles.womensTeam}>
                    <img className={pageStyles.teamImg} src='../womensTeam.jpg' alt='Womens Olympic Team'></img>
                    <summary>Team Peterson, representing the United States in women’s curling, consists of a talented roster featuring skip Tabitha Peterson, vice-skip Cory Thiesse, second Tara Peterson, lead Becca Hamilton, and alternate Vicky Persinger. The team has been a prominent force in international curling, having recently secured their third national title and earning a place at the 2024 World Women’s Curling Championship in Sydney, Nova Scotia. Known for their strategic prowess and teamwork, Team Peterson continues to showcase their skills at the highest levels of competition​.
                    </summary>
                </section>
                <section className={pageStyles.mensTeam}>
                    <img className={pageStyles.teamImg} src='../mensTeam.jpg' alt='Mens Olympic Team'></img>
                    <summary>Team Shuster, led by veteran skip John Shuster, represents the United States in mens curling and is a prominent name in the sport. The team also includes Chris Plys at third, Matt Hamilton at second, and John Landsteiner as lead, with Corey Dropkin serving as an alternate. Known for their tactical brilliance and camaraderie, Team Shuster has consistently been a dominant force on the ice. They are renowned for their gold medal win at the 2018 Winter Olympics and continue to compete at an elite level, recently representing the U.S. at the 2024 Pan Continental Curling Championships in Alberta. This seasoned team remains a cornerstone of U.S. curling and an inspiration in international competitions.​
                    </summary>
                </section>
            </article>
        </main>
    )
}