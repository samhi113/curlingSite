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
                <p className={styles.subTitle}>The Man, the Myth, the Legend.</p>
                <div className={styles.content}>
                  <img className={styles.pic} src='./toddGif.gif'/>
                  <p className={styles.ptext}>Professor Todd brought attention to the remarkable sport of curling, shining a light on its unique blend of strategy, skill, and tradition like no one else. In his honor, we’ve created a dedicated website to celebrate this incredible game. Our site dives deep into all aspects of curling, including how the sport works, the fascinating science and rich history behind it, and inspiring stories of some of the most famous players who have left their mark on the ice. It’s a tribute to both the sport and the man who helped so many discover its brilliance.</p>
                </div>
            </section>
    </main>
  )
};

