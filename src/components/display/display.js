"use client"
import styles from "./display.module.css"
import Link from "next/link"

export default function Display(title, pic, link="") {
    return(
        <main>
             <div className={styles.picBlock}>
                    <img className={styles.pic} src={pic}/>
                    <h2 className={styles.toolName}>{title}
                    </h2>
                </div>
        </main>
    )
}