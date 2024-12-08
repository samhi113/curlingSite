import styles from "./teamCard.module.css";

export default function TeamCard({ teamName, image, gold, silver, bronze }) {
    return (
        <div className={styles.card}>
            <img src={image} alt={`${teamName} logo`} className={styles.image} />
            <h3 className={styles.teamName}>{teamName}</h3>
            <div className={styles.medals}>
                <div className={styles.medal}>
                    🥇 <span>{gold}</span>
                </div>
                <div className={styles.medal}>
                    🥈 <span>{silver}</span>
                </div>
                <div className={styles.medal}>
                    🥉 <span>{bronze}</span>
                </div>
            </div>
        </div>
    );
}