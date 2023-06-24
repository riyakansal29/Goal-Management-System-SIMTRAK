import React, { useState } from 'react';
import Goals from './GoalParameters.jsx';

const AccountPage = () => {
  const [showAccount, setShowAccount] = useState(false);

  const handleAccount = () => {
    setShowAccount(true);
  };

  return (
    <div>
      <button onClick={handleAccount}>Add Goals</button>
      {showAccount && <Goals />}
    </div>
  );
};

export default AccountPage;
