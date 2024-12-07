import Link from "next/link"
import styles from "./tools.module.css"
// import Display from "@/components/display/display"

export default function Rules(){
    return(
        <main>
            <div className={styles.hero}>
            <h1 className={styles.title}> 
                Tools Of The Game 
            </h1>
            </div> 
            <section className={styles.container}>
                <div className={styles.picBlock}>
                    <Link href="/tools/stone">
                    <img className={styles.pic} src="/stone.jpg"/>
                    </Link>
                    <h2 className={styles.toolName}>Stones
                    </h2>
                </div>
                <div className={styles.picBlock}>
                    <Link href="/tools/broom">
                    <img className={styles.pic} src="/broom.jpg"/>
                    </Link>
                    <h2 className={styles.toolName}>Broom
                    </h2>
                </div>
                <div className={styles.picBlock}>
                    <Link href="/tools/shoes">
                    <img className={styles.pic} src="/shoes.jpg"/>
                    </Link>
                    <h2 className={styles.toolName}>shoes
                    </h2>
                </div>
            </section>
        </main>
    )
};