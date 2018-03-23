import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import TypingTestLeft from "./TypingTestLeft";
import TypingTestRight from "./TypingTestRight";
import TypingTestCenter from "./TypingTestCenter";
import FullWidthDiv from "./styledComponents/FullWidthDiv";

export class TypingTestContainer extends Component {
  componentWillMount = () => {
    this.props.generateTestList();
    window.addEventListener('keydown', this.handleKeydown, false)
  };

  handleKeydown = (e) => {
    this.props.keyInput(e.key);
  }

  render() {
    return (
      <FullWidthDiv onKeyPress={this.keyDown} tabIndex="0" >
        <TypingTestLeft completeList={this.props.completeList}/>
        <TypingTestCenter testList={this.props.testList} wrongKey={this.props.wrongKey}/>
        <TypingTestRight testList={this.props.testList} />
      </FullWidthDiv>
    );
  }
}

const mapStateToProps = state => ({
  testList: state.words.testList,
  completeList: state.words.completeList,
  wrongKey: state.words.wrongKey,
});

const mapDispatchToProps = dispatch => ({
  generateTestList: () => dispatch(actions.generateTestList()),
  keyInput: (payload) => dispatch(actions.keyInput(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(
  TypingTestContainer
);
