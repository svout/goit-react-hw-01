import React from 'react';
import FriendListItem from '../FriendListItem/FriendListItem';
import "./FriendList.css"

const FriendList = ({ friends }) => {
  return (
    <ul className='friend-list'>
      {friends.map(friend => (
        <li className='friend-item' key={friend.id}>
          <FriendListItem {...friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
