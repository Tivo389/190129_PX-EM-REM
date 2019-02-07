import React, { Component } from 'react';
import FontSetting from './FontSetting';
import ParagraphBlock from './ParagraphBlock';

class ParagraphContainer extends Component {
  render() {
    const {fontSize, lineHeight} = this.props;
    const lineHeightNum = lineHeight.replace('.','');
    return (
      <section className="paragraphContainer">
        <FontSetting
          fontSize={fontSize}
          lineHeight={lineHeight}>
          </FontSetting>
        <ParagraphBlock
          fontSize={fontSize}
          lineHeightNum={lineHeightNum}>
          </ParagraphBlock>
        {/* 999 CONTINUE HERE MAKE IMAGE BLOCK */}
      </section>
    );
  }
}

export default ParagraphContainer;
