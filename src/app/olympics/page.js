import styles from "./olympics.module.css";
import TeamCard from "../../components/teamCard/teamCard";
import Link from "next/link";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";

export default function Olympics() {
    const teams = [
        {
            name: "Team USA",
            image: "./usa.jpg",
            gold: 3,
            silver: 2,
            bronze: 1,
        },
        {
            name: "Team Canada",
            image: "./canada.png",
            gold: 5,
            silver: 4,
            bronze: 2,
        },
        {
            name: "Team Sweden",
            image: "./sweden.png",
            gold: 4,
            silver: 3,
            bronze: 1,
        },
        {
            name: "Team Switzerland",
            image: "./switzerland.webp",
            gold: 2,
            silver: 1,
            bronze: 3,
        },
        {
            name: "Team Norway",
            image: "./norway.png",
            gold: 1,
            silver: 3,
            bronze: 2,
        },
        {
            name: "Team Great Britain",
            image: "./britain.webp",
            gold: 3,
            silver: 2,
            bronze: 1,
        },
        {
            name: "Team China",
            image: "./china.png",
            gold: 2,
            silver: 1,
            bronze: 0,
        },
        {
            name: "Team Japan",
            image: "./japan.webp",
            gold: 0,
            silver: 2,
            bronze: 1,
        },
        {
            name: "Team Italy",
            image: "./italy.png",
            gold: 1,
            silver: 1,
            bronze: 0,
        },
        {
            name: "Team South Korea",
            image: "./south-korea.webp",
            gold: 0,
            silver: 1,
            bronze: 2,
        },
    ];

    return (
        <ClerkProvider>
            <main>
                <div className={styles.hero}>
                    <h1 className={styles.title}>Curling Olympics</h1>
                </div>
                <section className={styles.container}>
                    <SignedIn>
                        <div className={styles.grid}>
                            {teams.map((team, index) => (
                                <TeamCard
                                    key={index}
                                    teamName={team.name}
                                    image={team.image}
                                    gold={team.gold}
                                    silver={team.silver}
                                    bronze={team.bronze}
                                />
                            ))}
                        </div>
                        <Link href="/olympics/winner">
                            <button className={styles.wButton}>
                                WHO WON IN 2024?
                            </button>
                        </Link>
                    </SignedIn>
                    <SignedOut>
                        <p className={styles.message}>
                            Please <Link className={styles.button} href="/account">log in</Link> to view the Olympic team details and the winner!
                        </p>
                    </SignedOut>
                </section>
            </main>
        </ClerkProvider>
    );
}
