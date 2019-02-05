import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <section className="paragraphContainer">
        <code>
          <span className="blockC"></span>
          font-size: 16px&ensp;/&ensp;
          <span className="blockM"></span>
          line-height: 1.35
        </code>
        <div className="paragraphBlock">
          <p>My grandfather's clock was too large for the shelf</p>
          <p>So it stood ninety years on the floor</p>
          <p>It was taller by half than the old man himself</p>
          <p>Though it weighed not a pennyweight more</p>
        </div>
        <div className="paragraphBlock">
          <p>It was bought on the morn of the day that he was born</p>
          <p>And was always his treasure and pride</p>
          <p>But it stopped, short never to go again</p>
          <p>When the old man died</p>
        </div>
        <div className="paragraphBlock">
          <p>Ninety years without slumbering</p>
          <p>His life seconds numbering</p>
          <p>It stopped, short never to go again</p>
          <p>When the old man died</p>        
        </div>
      </section>
    );
  }
}

export default App;
