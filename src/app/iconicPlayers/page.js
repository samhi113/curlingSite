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
          <h1>Jarden Allen</h1>
          <div className={pageStyles.imgContain}>
            <img
              className={pageStyles.img}
              src="../../allenCurling.webp"
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
          <h1>The Iceman</h1>
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
          <h1>Joanne Courtney</h1>
          <div className={pageStyles.imgContain}>
            <img
              className={pageStyles.img}
              src="../../courtney.jpg"
              alt="Joanne Courtney"
            ></img>
            
          </div>

          <p>
          Joanne Courtney is a Canadian curler known for her accomplishments in the sport, particularly in the women's curling discipline. As a member of the Canadian national team, she has represented her country at numerous prestigious events, including the World Curling Championships and the Winter Olympics. Courtney gained recognition for her skills as a third on the team, contributing to both offensive and defensive strategies on the ice. She has been part of successful teams, earning multiple national titles and accolades throughout her career. In addition to her curling achievements, Courtney is also admired for her sportsmanship and her positive influence on the curling community.
          </p>
        </div>
      </article>
    </main>
  );
}
