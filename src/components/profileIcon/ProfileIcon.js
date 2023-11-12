import React from 'react'
import './profileIcon.css';

const ProfileIcon = ({name}) => {
    const [firstName, lastName] = name.split(' ');
    const firstLetter = firstName ? firstName[0] : '';
    const lastLetter = lastName ? lastName[0] : '';

    const symbol = firstLetter.toUpperCase() + lastLetter.toUpperCase();
  return (
    <div className='profile-wrapper'>
        <span>{symbol}</span>
    </div>
  )
}

export default ProfileIcon