import * as pageStyles from "./science.module.css";

export default function science() {
  return (
    <main className={pageStyles.main}>
      <header className={pageStyles.mainHeader}>
        <h1 className={pageStyles.headerText}>The Science Behind Curling</h1>
      </header>
      <article className={pageStyles.container}>
        <div className={pageStyles.txtContain}><h3>Sliding, Sweeping, and Strategy</h3>
        <p>
          Curling is a unique and fascinating sport where players slide heavy,
          polished granite stones across a sheet of ice toward a circular
          target, known as the "house." While it might seem like a simple game
          of sliding stones, the mechanics, physics, and teamwork behind curling
          are anything but straightforward. Let’s dive into the science that
          makes this sport so intriguing.
        </p></div>
        
        <div className={pageStyles.txtContain}><h3>1. The Ice Surface</h3>
        <p>
          Curling ice is not smooth like the ice used for skating or hockey.
          Instead, it is "pebbled" with small droplets of water that freeze into
          bumps. This pebbling creates a textured surface that reduces the
          contact area between the stone and the ice, minimizing friction and
          allowing the stone to glide more smoothly. The pebbling is critical
          for the stone’s unique curling trajectory — the gentle curve as it
          moves down the rink.
        </p></div>
        
        <div className={pageStyles.txtContain}><h3>2. The Curling Stone</h3>
        <p>
          Each curling stone weighs about 44 pounds and is made from rare
          granite, typically sourced from Ailsa Craig, an island in Scotland.
          The bottom of the stone, called the "running band," is slightly
          concave, ensuring that only a thin ring of granite touches the ice.
          This design reduces friction and helps concentrate force, allowing the
          stone to travel farther with less effort.
        </p></div>
        
        <div className={pageStyles.txtContain}><h3>3. The Slide</h3>
        <p>
          Players push off from the hack (a foothold on the ice) to deliver the
          stone. During delivery, they impart a gentle spin to the stone —
          typically a clockwise or counterclockwise rotation. This spin
          interacts with the pebbled ice, causing the stone to "curl" as it
          slows down. The curl happens due to asymmetrical friction: the side of
          the stone rotating forward experiences slightly more resistance than
          the trailing side, nudging the stone into a curved path.
        </p></div>
        
        <div className={pageStyles.txtContain}><h3>4. The Role of Sweeping</h3>
        <p>
          Sweeping is perhaps the most iconic part of curling. Players use
          specialized brooms to sweep the ice in front of the stone. But why?
          Sweeping serves two main purposes: Reducing Friction: Sweeping melts
          the very top layer of the ice, creating a thin film of water that
          reduces friction. This allows the stone to travel farther and
          straighter. Controlling Curl: By reducing friction, sweeping can also
          moderate the amount of curl, keeping the stone closer to its intended
          trajectory. Interestingly, the effectiveness of sweeping depends on
          pressure, speed, and technique. Modern brooms with synthetic heads
          provide better friction reduction compared to traditional brushes.
        </p></div>
        
        <div className={pageStyles.txtContain}><h3>5. Strategy and Precision</h3>
        <p>
          Curling is often compared to chess on ice due to its strategic depth.
          Teams take turns delivering stones, aiming to position them as close
          to the center of the house as possible. They must also anticipate
          their opponents’ moves, setting up guards or knocking out other
          stones. The precision required in curling is immense. A slight change
          in the angle, force, or rotation of the stone can mean the difference
          between a perfect shot and a complete miss. Teams carefully calculate
          the speed (or "weight") and trajectory of each shot, often using
          trial-and-error during practice sessions to gauge ice conditions.
        </p></div>
        
        <div className={pageStyles.txtContain}><h3>6. The Science of Collaboration</h3>
        <p>
          Curling isn’t just about individual skill; it’s a team sport where
          communication and coordination are crucial. The skip, who acts as the
          team strategist, calls the shots and directs the sweepers. Everyone’s
          role is vital, from the person delivering the stone to those guiding
          it down the rink.
        </p></div>
        
        <div className={pageStyles.txtContain}><h3>7. Advances in Curling Technology</h3>
        <p>
          Modern curling has embraced technology to improve performance and
          understanding. Sensors in stones can measure speed and rotation, while
          advanced brooms optimize sweeping efficiency. Even ice preparation has
          become more scientific, with careful temperature control and pebbling
          techniques to ensure consistent playing surfaces.
        </p></div>
        
        <div className={pageStyles.txtContain}><h3>Conclusion</h3>
        <p>
          Curling is a beautiful blend of physics, engineering, and human skill.
          The interplay between friction, momentum, and strategy creates a sport
          that is as cerebral as it is physical. The next time you watch a
          curling match, take a moment to appreciate the science at play — from
          the pebbled ice to the sweeping brooms, every detail contributes to
          the captivating curl of the stone.
        </p></div>
        
      </article>
    </main>
  );
}
