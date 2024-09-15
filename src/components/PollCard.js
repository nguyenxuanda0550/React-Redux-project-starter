
import { Link } from 'react-router-dom';

const PollCard = ({ poll, author }) => {
  console.log('poll', poll)
  const date = new Date(poll.timestamp).toLocaleDateString();
  
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img 
        src={author?.avatarURL || 'https://via.placeholder.com/450'} 
        className="card-img-top" 
        alt="avatar" 
        style={{ width: '100%', height: '180px', objectFit: 'cover' }} 
      />
      <div className="card-body">
        <h5 className="card-title">{author?.name}</h5>
        <p className="card-text text-muted">Date: {date}</p>
        <Link 
          to={`/questions/${poll.id}`} 
          className="btn btn-primary"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default PollCard;
