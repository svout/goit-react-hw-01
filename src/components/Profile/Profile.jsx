import React from "react";
import "./Profile.css"

const Profile = ({name, tag, location, image, stats}) => {
    return (
        <div className="container">
        <div className="profile-container">
          <img
            src={image}
            alt="User avatar"
            className="user-avatar"
          />
          <p className="name">{name}</p>
          <p className="tag">@{tag}</p>
          <p className="location">{location}</p>
        </div>
  
        <ul className="profile-list">
          <li className="profile-item">
            <span className="followers">Followers</span>
            <span className="followers-stats">{stats.followers}</span>
          </li>
          <li className="profile-item">
            <span className="view">Views</span>
            <span className="view-stats">{stats.views}</span>
          </li>
          <li className="profile-item">
            <span className="likes">Likes</span>
            <span className="likes-stats">{stats.likes}</span>
          </li>
        </ul>
      </div>
    )
}

export default Profile;