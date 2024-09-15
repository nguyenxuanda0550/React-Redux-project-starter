import { useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { handleCreateAnswer } from '../actions/polls';
import Error404 from './Error404';

const Poll = ({ authUser, users, questions, dispatch }) => {
  // Get the poll id from the URL
  const { id } = useParams();
  const authorName = users[questions[id]?.author]?.name;
  const authUserAnswer = users[authUser?.id]?.answers[id];
  const [answer, setAnswer] = useState(authUserAnswer);
  // console.log('answer', answer )
  const initialVoteCount = {
    optionOne: questions[id]?.optionOne?.votes?.length,
    optionTwo: questions[id]?.optionTwo?.votes?.length,
  };
  const [voteCount, setVoteCount] = useState(initialVoteCount);

  if (!questions[id]) return <Error404 />;

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">
        Poll by {authorName}
      </h1>
      {users[questions[id].author].avatarURL ? (
        <img
          src={users[questions[id].author].avatarURL}
          alt="avatar"
          className="rounded-circle mx-auto d-block"
          style={{ width: '100px', height: '100px' }}
        />
      ) : (
        <div className="rounded-circle bg-secondary d-flex justify-content-center align-items-center mx-auto" style={{ width: '100px', height: '100px' }}>
          <span className="text-white fs-3">
            {authorName[0]}
          </span>
        </div>
      )}
      <div className="mt-4">
        <h2 className="text-center mb-4">Would you rather</h2>
        <div className="d-flex justify-content-center gap-4">
          <button
            onClick={() => {
              if (answer) return;
              dispatch(handleCreateAnswer(id, 'optionOne'));
              setAnswer('optionOne');
              setVoteCount((prev) => ({
                ...prev,
                optionOne: prev.optionOne + 1,
              }));
            }}
            className={`btn btn-outline-primary d-flex flex-column gap-2 ${answer === 'optionOne' ? 'bg-success text-white' : ''}`}
          >
            <span>{questions[id].optionOne.text}</span>
            {authUserAnswer && (
              <span>
                votes: {voteCount.optionOne} (
                {(
                  (voteCount.optionOne /
                    (voteCount.optionOne + voteCount.optionTwo)) *
                  100
                ).toFixed(2)}{' '}
                %)
              </span>
            )}
          </button>
          <button
            onClick={() => {
              if (answer) return;
              dispatch(handleCreateAnswer(id, 'optionTwo'));
              setAnswer('optionTwo');
              setVoteCount((prev) => ({
                ...prev,
                optionTwo: prev.optionTwo + 1,
              }));
            }}
            className={`btn btn-outline-primary d-flex flex-column gap-2 ${answer === 'optionTwo' ? 'bg-success text-white' : ''}`}
          >
            <span>{questions[id].optionTwo.text}</span>
            {authUserAnswer && (
              <span>
                votes: {voteCount.optionTwo} (
                {(
                  (voteCount.optionTwo /
                    (voteCount.optionOne + voteCount.optionTwo)) *
                  100
                ).toFixed(2)}{' '}
                %)
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authUser, users, questions }) => {
  return {
    authUser,
    users,
    questions,
  };
};

export default connect(mapStateToProps)(Poll);
