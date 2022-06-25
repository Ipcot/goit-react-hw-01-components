import PropTypes from 'prop-types';
import { UserName } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar }) => {
  return (
    <div>
      <img src={avatar} alt="User avatar" />
      <UserName>{username}</UserName>
      <p>{tag}</p>
      <p>{location}</p>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
