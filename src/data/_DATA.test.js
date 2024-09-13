const {
  _saveQuestionAnswer,
  _saveQuestion,
  _getQuestions,
} = require('./_DATA');

describe('Testing _saveQuestion Functionality', () => {
  it('saves the question correctly and updates the relevant user data', async () => {
    const newQuestion = {
      optionOneText: 'Option One',
      optionTwoText: 'Option Two',
      author: { id: 'tylermcginnis' },
    };

    const result = await _saveQuestion(newQuestion);

    expect(result).toEqual({
      id: expect.any(String),
      timestamp: expect.any(Number),
      author: 'tylermcginnis',
      optionOne: {
        votes: [],
        text: 'Option One',
      },
      optionTwo: {
        votes: [],
        text: 'Option Two',
      },
    });
  });

  it('throws an error when required fields are missing', async () => {
    const question = {};

    await expect(_saveQuestion(question)).rejects.toEqual(
      'Please provide optionOneText, optionTwoText, and author',
    );
  });
});

describe('Testing _saveQuestionAnswer Functionality', () => {
  it('returns true when given valid parameters', async () => {
      const response = await _saveQuestionAnswer({
        authedUser: 'sarahedo',
        qid: '8xf0y6ziyjabvozdd253nd',
        answer: 'optionTwo',
      });
    expect(response).toBeTruthy();
  });

  it('throws an error for invalid parameters', async () => {
    const response = await _saveQuestionAnswer({
      authedUser: undefined,
      qid: undefined,
      answer: 'optionTwo',
    }).catch((e) => e);

    expect(response).toBe('Please provide authedUser, qid, and answer');

  });
});