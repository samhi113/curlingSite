import * as pageStyles from "./iconic.module.css";

export default function iconic() {
  return (
    <main>
      <header className={pageStyles.mainHeader}>
        <h1 className={pageStyles.headerText}>
          Iconic Players: Celebrities and Pros
        </h1>
      </header>
      <article className={pageStyles.container}>
        <div className={pageStyles.txtContain}>
          <h3>Jarden Allen</h3>
          <div className={pageStyles.imgContain}>
            <img
              className={pageStyles.img}
              src="../../allenCurling.webp"
              alt="Jared Allen curling"
            ></img>
            <img
              className={pageStyles.img}
              src="../../allenFootball.jpg"
              alt="Jared Allen curling"
            ></img>
          </div>

          <p>
            Jarden Allen, former football player for the Bengals and the Chiefs.
            After retiring from football Allen went on to form his own curling
            team with other retired NFL players.
          </p>
        </div>
        <div className={pageStyles.txtContain}>
          <h3>The Iceman</h3>
          <div className={pageStyles.imgContain}>
            <img
              className={pageStyles.img}
              src="../../theIceman.jpg"
              alt="The Iceman, Allan Hackner"
            ></img>
            
          </div>

          <p>
          Allan "The Iceman" Hackner is a legendary Swedish curler, widely regarded as one of the sport's greatest players. He is best known for leading Sweden to multiple international victories, including winning the World Curling Championship in 1981 and 1985. Hackner's skill, strategy, and leadership helped elevate Sweden's prominence in the curling world. His contributions to the sport go beyond his victories; he was instrumental in popularizing curling in Sweden and mentoring future generations of players. Hackner's precision and cool-headedness on the ice earned him the nickname "The Iceman," reflecting his composure in high-pressure situations.
          </p>
        </div>
        <div className={pageStyles.txtContain}>
          <h3>Huff and Puff</h3>
          <div className={pageStyles.imgContain}>
            <img
              className={pageStyles.img}
              src="../../theIceman.jpg"
              alt="The Iceman, Allan Hackner"
            ></img>
            
          </div>

          <p>
          hhh
          </p>
        </div>
      </article>
    </main>
  );
}
