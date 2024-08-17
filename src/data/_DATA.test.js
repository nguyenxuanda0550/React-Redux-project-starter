const { _saveQuestionAnswer, _saveQuestion } = require('./_DATA');

describe('Testing _saveQuestion Functionality', () => {
  it('saves the question correctly and updates the relevant user data', async () => {
    const newQuestion = {
      optionOneText: 'Option One',
      optionTwoText: 'Option Two',
      author: { id: 'tylermcginnis' },
    };

    const result = await _saveQuestion(newQuestion);

    expect(result).toMatchObject({
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
    const incompleteQuestion = {};

    await expect(_saveQuestion(incompleteQuestion)).rejects.toThrow(
      'Please provide optionOneText, optionTwoText, and author',
    );
  });
});

describe('Testing _saveQuestionAnswer Functionality', () => {
  it('returns true when given valid parameters', async () => {
    const answerSubmission = {
      authedUser: 'sarahedo',
      qid: '8xf0y6ziyjabvozdd253nd',
      answer: 'optionTwo',
    };

    const result = await _saveQuestionAnswer(answerSubmission);

    expect(result).toBe(true);
  });

  it('throws an error for invalid parameters', async () => {
    const invalidSubmission = {
      authedUser: undefined,
      qid: undefined,
      answer: 'optionTwo',
    };

    await expect(_saveQuestionAnswer(invalidSubmission)).rejects.toThrow(
      'Please provide authedUser, qid, and answer',
    );
  });
});
