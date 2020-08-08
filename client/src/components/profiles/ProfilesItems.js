import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfilesItems = ({
  profile: {
    user: { _id, name },
    status,
    company,
    location,
    skills,
  },
}) => {
  return (
    <div className='profile bg-light'>
      <i className='fas fa-user-circle fa-10x'></i>
      <div className=''>
        <h2>{name}</h2>
        <p className='my-1'>
          {status} {company && <span> at {company} </span>}
        </p>
        <p className='my-1'>{location && <span>{location}</span>} </p>
        <Link to={`/profile/${_id}`} className='btn btn-primary'>
          View Profile
        </Link>
      </div>
      <ul>
        {skills.slice(0, 4).map((skill, index) => (
          <li className='text-primary' key={index}>
            <i className='fas fa-check-double'></i> {''}
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfilesItems.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfilesItems;
