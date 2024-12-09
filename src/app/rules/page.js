import styles from "./rules.module.css"

export default function Rules(){
    return(
        <main>
            <div className={styles.hero}>
            <h1 className={styles.title}> 
                RULES OF THE GAME 
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
                <div className={styles.infoBlock3}>
                    <h2>Gameplay</h2>
                    
                        <ul>
                            <li><span className={styles.boldText}>Ends:</span> A game is divided into ends, similar to innings in baseball. An end concludes when both teams have delivered all 8 stones.
                                Most games have 8 or 10 ends.
                            </li>
                            <li><span className={styles.boldText}>Throwing the Stone:</span> Stones are delivered from the hack, a foothold in the ice.
                            Players aim for the house at the other end of the sheet.
                            </li>
                            <li><span className={styles.boldText}>Sweeping:</span> Sweeping is used to reduce friction and influence the speed and direction of the stone.
                            Players sweep the ice in front of the moving stone to help guide it to the target.
                            </li>
                            <li><span className={styles.boldText}>Turn Rotation:</span> The stone must be released with a slight clockwise or counterclockwise spin, creating a "curl" as it travels down the ice.
                            </li>
                            <li><span className={styles.boldText}>Turn Rotation:</span> The stone must be released with a slight clockwise or counterclockwise spin, creating a "curl" as it travels down the ice.
                            </li>
                        </ul>
                
                </div>
                <div className={styles.infoBlock}>
                    <h2>Scoring</h2>
                    <p>
                    Points are scored after all stones are delivered in an end.
                    The team with the stone closest to the button scores points for that end.
                    Additional points are awarded for every other stone of the scoring team that is closer to the button than the closest opponent's stone.
                    Only stones within the house (touching the rings) are eligible to score.
                    </p>
                </div>
                <div className={styles.infoBlock}>
                    <h2>Rules for Stones</h2>
                    <p>
                    Stones must be released before crossing the hog line.
                    A stone must fully cross the far hog line to remain in play.
                    Stones can be knocked out of the house by opponents, but removing stones from play is only allowed after a certain number of stones have been thrown in each end (this depends on the type of game, such as traditional curling or mixed doubles).
                    </p>
                </div>
                <div className={styles.infoBlock}>
                    <h2>Order of Play</h2>
                    <p>
                    Teams alternate delivering stones.
                    The skip calls the strategy and directs where the team aims to place the stones.
                    </p>
                </div>
                <div className={styles.infoBlock3}>
                    <h2>Types of Shots</h2>
            
                        <ul>
                            <li><span className={styles.boldText}>Draw:</span> A stone delivered to stop at a specific point, often within the house.

                            </li>
                            <li><span className={styles.boldText}>Guard:</span> A stone positioned to block the path to another stone.
                            </li>
                            <li><span className={styles.boldText}>Takeout:</span> A shot aimed at removing an opponent's stone from play.
                            </li>
                        </ul>
                  
                </div>
                <div className={styles.infoBlock}>
                    <h2>Winning the Game</h2>
                    <p>
                    The team with the most points at the end of all ends wins.
                    If the score is tied after the final end, an extra end is played to determine the winner.
                    </p>
                </div>
            </section>
        </main>
    )
};