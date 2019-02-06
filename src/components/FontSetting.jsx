import React, { Component } from 'react';

class FontSetting extends Component {
  render() {
    const {fontSize, lineHeight} = this.props;
    return (
      <code>
        <span className="fontSizeKey"></span>
        font-size: {fontSize}&ensp;/&ensp;
        <span className="lineHeightKey"></span>
        line-height: {lineHeight}
      </code>
    );
  }
}

export default FontSetting;
