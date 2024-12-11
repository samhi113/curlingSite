"use client"

import styles from './page.module.css'

export default function Home() {
  console.log("a")
  return (
    <main>
      <div className={styles.hero}>
            <h1 className={styles.title}> 
                Curling
            </h1>
            </div> 
            <section className={styles.container}>
                <p className={styles.subTitle}>This Site Is All About Curling</p>
                <div className={styles.content}>
                  <img className={styles.pic} src='./todd.png'/>
                  <p className={styles.ptext}>One man shined a light on the sport of curling like no other. In honor of Proffessor Todd, We have made a dedicated website to the sport of curling.</p>
                </div>
            </section>
    </main>
  )
};

