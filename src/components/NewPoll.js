import { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleCreateQuestion } from '../actions/polls';

const NewPoll = ({ dispatch }) => {
  const navigate = useNavigate();
  const [options, setOptions] = useState({
    firstOption: '',
    secondOption: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (options.firstOption === '' || options.secondOption === '') {
      alert('Please enter both options');
      return;
    }
    dispatch(handleCreateQuestion(options.firstOption, options.secondOption));
    navigate('/');
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">New Poll</h1>
      <form className="mx-auto" style={{ maxWidth: '600px' }} onSubmit={onSubmit}>
        <div className="mb-3">
          <label
            htmlFor="firstOption"
            className="form-label"
            data-testid="firstOptionLabel"
          >
            First Option
          </label>
          <input
            value={options.firstOption}
            onChange={(e) =>
              setOptions({ ...options, firstOption: e.target.value })
            }
            type="text"
            name="firstOption"
            data-testid="firstOption"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="secondOption"
            className="form-label"
            data-testid="secondOptionLabel"
          >
            Second Option
          </label>
          <input
            value={options.secondOption}
            onChange={(e) =>
              setOptions({
                ...options,
                secondOption: e.target.value,
              })
            }
            type="text"
            name="secondOption"
            data-testid="secondOption"
            className="form-control"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary w-100"
          data-testid="submit-poll"
        >
          Add Poll
        </button>
      </form>
    </div>
  );
};

export default connect()(NewPoll);
