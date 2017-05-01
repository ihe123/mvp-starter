import React from 'react';

const UserHistory = (props) => (
  <div>
    {props.displayHistory.map((entry)=>(<div>{entry.name} {entry.mood} {entry.subreddit} {entry.createdAt}</div>))}
  </div>
)

export default UserHistory

