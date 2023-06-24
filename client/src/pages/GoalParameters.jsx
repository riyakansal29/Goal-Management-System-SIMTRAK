


import React, { useState } from 'react';
import './GoalParameters.css';

const GoalParameters = () => {
  const [idNumber, setIdNumber] = useState('');
  const [renameOption, setRenameOption] = useState('');

  const handleIdNumberChange = (e) => {
    setIdNumber(e.target.value);
  };

  const handleRenameOptionChange = (e) => {
    setRenameOption(e.target.value);
  };

  return (
    <div>

      <div className="goal-parameters-container">
        <h1>Goal Parameters</h1>
        <form>
          <div className="form-group">
            <label>ID Number:</label>
            <input
              type="text"
              value={idNumber}
              onChange={handleIdNumberChange}
            />
          </div>
          <div className="form-group">
            <label>Rename Option:</label>
            <input
              type="text"
              value={renameOption}
              onChange={handleRenameOptionChange}
            />
          </div>
          <div className="form-group">
            <label>Leads Generation:</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Emails Sent:</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Calls Made:</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Progressive Responses:</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Meetings Held:</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>WhatsApp Sent:</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Sessions Planned:</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Sessions Held:</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Centres Planned:</label>
            <input type="text" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default GoalParameters;
