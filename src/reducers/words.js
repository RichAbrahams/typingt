import wordJson from "../words/wordList.json";
import * as c from "../constants";
const { wordList } = wordJson;

const initialState = {
  fullWordList: wordList,
  testList: "",
  completeList: "",
  wrongKey: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case c.GENERATE_TEST_LIST: {
      const newTestList = new Set();
      const wordList = state.fullWordList;
      while (newTestList.size < 250) {
        const randomWord =
          wordList[Math.floor(Math.random() * Math.floor(wordList.length))];
        newTestList.add(randomWord);
      }
      return Object.assign({ ...state }, { testList: [...newTestList].join('')});
    }
    case c.KEY_INPUT: {
      let testList = state.testList;
      let completeList = state.completeList;
      let wrongKey = state.wrongKey;
      if (action.payload === testList[0]) {
        completeList = completeList + testList[0];
        testList = testList.substring(1);
        wrongKey = false;
      } else {
        wrongKey = true;
      }
      return Object.assign({...state}, {completeList, testList, wrongKey });
    }
    default:
      return state;
  }
};
