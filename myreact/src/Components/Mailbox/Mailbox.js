import React from 'react';

const Mailbox = ({message}) => {
  const unread = message.length > 0 && <h3>You have {message.length} message unread</h3>
  return (
    <div>
      <h2>Hello,</h2>
      {unread}
    </div>
  );
};

export default Mailbox;