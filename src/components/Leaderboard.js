import { connect } from 'react-redux';

const Leaderboard = ({ users }) => {
  const sortedUsers = Object.keys(users).sort((a, b) => {
    const userA = users[a];
    const userB = users[b];
    const userAScore =
      Object.keys(userA.answers).length + Object.keys(userA.questions).length;
    const userBScore =
      Object.keys(userB.answers).length + Object.keys(userB.questions).length;
    return userBScore - userAScore;
  });

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Leaderboard</h1>
      <table className="table table-striped">
        <thead className="thead-light">
          <tr>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Answers</th>
            <th scope="col">Polls</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user, index) => {
            const { name, avatarURL, answers, questions, id } = users[user];
            return (
              <tr key={id}>
                <th scope="row">{index + 1}</th>
                <td className="d-flex align-items-center">
                  {avatarURL ? (
                    <img
                      src={avatarURL}
                      alt={name}
                      className="rounded-circle me-2"
                      style={{ width: '40px', height: '40px' }}
                    />
                  ) : (
                    <div
                      className="bg-secondary rounded-circle d-flex align-items-center justify-content-center text-white me-2"
                      style={{ width: '40px', height: '40px' }}
                    >
                      <svg
                        className="bi bi-person"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M3 14s-1 0-1-1 1-3 5-3 5 3 5 3-1 1-1 1H3zm6-5a2 2 0 1 0-4 0 2 2 0 0 0 4 0z"
                        />
                      </svg>
                    </div>
                  )}
                  <span>{`${name} (${id})`}</span>
                </td>
                <td>{Object.keys(answers).length}</td>
                <td>{Object.keys(questions).length}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    users,
  };
};

export default connect(mapStateToProps)(Leaderboard);
