import * as c from '../constants';

export const generateTestList = () => ({
  type: c.GENERATE_TEST_LIST,
});

export const keyInput = (payload) => ({
  type: c.KEY_INPUT,
  payload: payload
})
