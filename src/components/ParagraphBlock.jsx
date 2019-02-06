import React, { Component, Fragment } from 'react';

class ParagraphBlock extends Component {
  render() {
    const { fontSize, lineHeightNum } = this.props;
    const fontSizeClass = `fs${fontSize}`;
    const lineHeightClass = `lh${lineHeightNum}`;
    const classSet = `paragraphBlock ${fontSizeClass} ${lineHeightClass}`;
    return (
      <Fragment>
        <div className={classSet}>
          <p>My grandfather's clock was too large for the shelf</p>
          <p>So it stood ninety years on the floor</p>
          <p>It was taller by half than the old man himself</p>
          <p>Though it weighed not a pennyweight more</p>
        </div>
        <div className={classSet}>
          <p>It was bought on the morn of the day that he was born</p>
          <p>And was always his treasure and pride</p>
          <p>But it stopped, short never to go again</p>
          <p>When the old man died</p>
        </div>
        <div className={classSet}>
          <p>Ninety years without slumbering</p>
          <p>His life seconds numbering</p>
          <p>It stopped, short never to go again</p>
          <p>When the old man died</p>        
        </div>
      </Fragment>
    );
  }
}

export default ParagraphBlock;
