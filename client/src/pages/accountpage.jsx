import React, { useState } from 'react';
import Account from './account.jsx';

const AccountPage = () => {
  const [showAccount, setShowAccount] = useState(false);

  const handleAccount = () => {
    setShowAccount(true);
  };

  return (
    <div>
      <button onClick={handleAccount}>Add Account</button>
      {showAccount && <Account />}
    </div>
  );
};

export default AccountPage;
