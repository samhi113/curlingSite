import styles from "./tools.module.css"

export default function Rules(){
    return(
        <main>
            <div className={styles.hero}>
            <h1 className={styles.title}> 
                Tools Of The Game 
            </h1>
            </div> 
            <section className={styles.container}>
                <div className={styles.infoBlock}>
                    <h2>Objective</h2>
                    <p>
                    The goal is to score points by positioning your team's stones closer to the center of the house (the button) than your opponent's stones.
                    </p>
                </div>
                <div className={styles.infoBlock}>
                    <h2>Teams</h2>
                    <p>
                    Each team consists of four players:
                    Lead, Second, Third (Vice-Skip), Skip (Team Captain).
                    Teams take turns delivering stones, with each player delivering two stones per end.
                    </p>
                </div>
            </section>
        </main>
    )
};