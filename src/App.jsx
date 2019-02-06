import React, { Component, Fragment } from 'react';
import ParagraphContainer from './components/ParagraphContainer';


class App extends Component {
  render() {
    return (
      <Fragment>
        <ParagraphContainer
          fontSize="10px"
          lineHeight="1.35">
          </ParagraphContainer>
        <ParagraphContainer
          fontSize="14px"
          lineHeight="1.35">
          </ParagraphContainer>
        <ParagraphContainer
          fontSize="18px"
          lineHeight="1.35">
          </ParagraphContainer>
      </Fragment>
    );
  }
}

export default App;
