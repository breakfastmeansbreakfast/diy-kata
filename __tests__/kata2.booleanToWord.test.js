const { booleanToWord } = require('../src');

describe('booleanToWord', () => {
  it('When booleanToWord is passed true, it should return Yes. When it is passed false, it should return No', () => {
  expect(booleanToWord(false)).toBe('No')
  expect(booleanToWord(true)).toBe('Yes')
  // how do we create specs again???
})
})
