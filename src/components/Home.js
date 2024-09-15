import { useState } from 'react';
import { connect } from 'react-redux';
import PollCard from './PollCard';

const Home = ({ answeredPolls, unansweredPolls, users }) => {
  // console.log('answeredPolls', answeredPolls)
  // console.log('unansweredPolls', unansweredPolls)
  const [showPoll, setShowPoll] = useState(0);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Dashboard</h1>
      <ul className="nav nav-tabs justify-content-center mb-4">
        <li className="nav-item">
          <button
            onClick={() => setShowPoll(0)}
            className={`nav-link ${showPoll === 0 ? 'active' : ''}`}
          >
            Unanswered Poll
          </button>
        </li>
        <li className="nav-item">
          <button
            onClick={() => setShowPoll(1)}
            className={`nav-link ${showPoll === 1 ? 'active' : ''}`}
          >
            Answered Poll
          </button>
        </li>
      </ul>
      {showPoll === 0 ? (
        <div>
          <h2 className="text-primary text-center mb-4">Unanswered Polls</h2>
          <div className="d-flex flex-wrap justify-content-around">
            {unansweredPolls.map((poll) => (
              <PollCard
                key={poll.id}
                poll={poll}
                author={users[poll.author]}
              />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-primary text-center mb-4">Answered Polls</h2>
          <div className="d-flex flex-wrap justify-content-around">
            {answeredPolls.map((poll) => (
                <PollCard
                key={poll.id}
                poll={poll}
                author={users[poll.author]}
                />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ authUser, questions, users }) => {
  const answeredPolls = Object.values(questions)
    .filter((poll) =>
      poll.optionOne.votes.includes(authUser.id) ||
      poll.optionTwo.votes.includes(authUser.id)
    )
    .sort((a, b) => b.timestamp - a.timestamp);

  const unansweredPolls = Object.values(questions)
    .filter((poll) =>
      !poll.optionOne.votes.includes(authUser.id) &&
      !poll.optionTwo.votes.includes(authUser.id)
    )
    .sort((a, b) => b.timestamp - a.timestamp);

  return {
    answeredPolls,
    unansweredPolls,
    users,
  };
};

export default connect(mapStateToProps)(Home);

// import { useState } from 'react';
// import { connect } from 'react-redux';
// import PollCard from './PollCard';

// const Home = ({ answeredPolls, unansweredPolls, users }) => {
//   const [showPoll, setShowPoll] = useState(0);

//   return (
//     <div className="container mt-5">
//       <h1 className="text-center mb-4">Dashboard</h1>
//       <ul className="nav nav-tabs justify-content-center mb-4">
//         <li className="nav-item">
//           <button
//             onClick={() => setShowPoll(0)}
//             className={`nav-link ${showPoll === 0 ? 'active' : ''}`}
//           >
//             Unanswered Poll
//           </button>
//         </li>
//         <li className="nav-item">
//           <button
//             onClick={() => setShowPoll(1)}
//             className={`nav-link ${showPoll === 1 ? 'active' : ''}`}
//           >
//             Answered Poll
//           </button>
//         </li>
//       </ul>
//       {showPoll === 0 ? (
//         <div>
//           <h2 className="text-primary text-center mb-4">Unanswered Polls</h2>
//           <div className="d-flex flex-wrap justify-content-around">
//             {unansweredPolls.map((poll) => (
//               <PollCard
//                 key={poll.id}
//                 poll={poll}
//                 author={users[poll.author]}
//               />
//             ))}
//           </div>
//         </div>
//       ) : (
//         <div>
//           <h2 className="text-primary text-center mb-4">Answered Polls</h2>
//           <div className="d-flex flex-wrap justify-content-around">
//             {answeredPolls.map((poll) => (
//               <PollCard
//                 key={poll.id}
//                 poll={poll}
//                 author={users[poll.author]}
//               />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const mapStateToProps = ({ authUser, questions, users }) => {
//   // Get the authenticated user ID
//   const authedUserId = authUser;

//   const answeredPolls = Object.values(questions)
//     .filter(
//       (poll) =>
//         poll.optionOne.votes.includes(authedUserId) ||
//         poll.optionTwo.votes.includes(authedUserId)
//     )
//     .sort((a, b) => b.timestamp - a.timestamp);

//   const unansweredPolls = Object.values(questions)
//     .filter(
//       (poll) =>
//         !poll.optionOne.votes.includes(authedUserId) &&
//         !poll.optionTwo.votes.includes(authedUserId)
//     )
//     .sort((a, b) => b.timestamp - a.timestamp);

//   return {
//     answeredPolls,
//     unansweredPolls,
//     users,
//   };
// };

// export default connect(mapStateToProps)(Home);


