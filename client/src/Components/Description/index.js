import React from 'react';

function Descript(props) {

  switch (props.topic) {
    case 'reading':
      return (
        <div className="description-body" className={props.class}>
          <p>
          I used to do a fair bit of reading when I was a little kid and fell
          off the wagon from middle school until a few years ago. I've mostly
          read web serials such as Metaworld Chronciles (an ongoing story and
          my current favorite), and The Wandering Inn (a close second favorite).
          I Also read Light Novels and Manga as well. I've tried my hand at writing
          my own stories over the years but have found it difficult to stick with a
          single concept long enough to produce an enjoyable story.
          </p>
        </div>);
    case 'AUFC':
      return (
        <div className="description-body" className={props.class}>
          <p>I played soccer for 14 years and have some interest in one day
          coaching a team myself. My favorite soccer team is Atlanta
          United who won the MLS Cup last year in only their second year of
          play. There are few things in this world that could compare to
          being in a building with 70 thousand other people who share your
          love for team and sport all chanting together and rooting for the
          same team.
          </p>
        </div>);
    case 'Game':
      return (
        <div className="description-body" className={props.class}>
          <p> My favorite video game would be a bit of a more difficult
          choice though. Bioshock Infinite would definitely be one at
          the top of the list. It built on the gameplay mechanics of the
          first two games that made them enjoyable, had a storyline
          that was easy to become immersed in and an environment that was
          stunning and stroked the imagination while still feeling
          grounded in reality. It also throws in a bit of
          theoretical physics that caught the interest of the scientist
          in me. The Civilization series is also one of my top favorites.
          I spend quite a bit of time with strategy games and online shooters.
          I even watch E-Sports from time to time. Recently I've been watching
          a lot of the Overwatch League where my favorite team is the Atlanta Reign.
          </p>
        </div>);
    case 'Anime':
      return (
        <div className="description-body" className={props.class}>
          <p>I watched my fair share of anime as a young kid, catching
           Dragon Ball on the weekends or the occasional Gundam
           episode at night, but it wasn't until I was around 18
           years old that I really dug into the media and started
           watching hours upon hours of shows. If I was asked my
           favorite anime I'm not entirely sure I could answer;
           there are just too many shows that I would rate 10/10.
          </p>
        </div>);
    case 'Blender':
      return (
        <div className="description-body" className={props.class}>
          <p>I picked up 3D modeling in Blender about 4 years ago and
           have continued making models off and on ever since. Last year
           I picked up a 3D printer from Prusa and have really dove back
           into the 3D modeling groove. I've never been big on "creating"
           in an arts and crafts sense but modeling something out and
           seeing it print out layer by layer is one of the most
           satisfying feelings I've ever experienced.
          </p>
        </div>);
    default:
      return (
        <div className="description-body" className={props.class}>
          <p>
          I am 24 years old and was born in Mdonough, Georgia. My top 4
          hobbies include soccer, video games, reading and anime;
          though I like to dabble in various things which is how I've
          found my way into web development. I'm hoping to use the
          skills I learn from this experience to one day shift over
          into game development. I also have interests in one day
          starting my own business so the skills I'm developing now will
          provide a way of creating my own website when the time
          comes versus hiring someone else to handle it for me.
          <br />
          <br />
          <u>To learn more about me and my hobbies, hover over one of the surrounding pictures.</u>
          </p>
        </div>);
  }

}

export default Descript;