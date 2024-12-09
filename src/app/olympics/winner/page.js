
import styles from "./winner.module.css"


export default function Winner() {
   const team =  {
        name: "Team Sweden",
        image: "./sweden.png",
        gold: 4,
        silver: 3,
        bronze: 1,
    }

    return(
        <main>
            <div className={styles.wzone}>
                <h1 className={styles.title}>The Winner is:</h1>
                <h2 className={styles.wtitle}>Sweden</h2>
                <img className={styles.pic} src="../sweden.png"/>
            </div>
            
        </main>
    )
}