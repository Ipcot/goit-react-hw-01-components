import PropTypes from 'prop-types';
import { UserName, ProfileImg, StyledText } from './Profile.styled';
import { Box } from 'components/Box/Box.styled';

export const Profile = ({ username, tag, location, avatar }) => {
  return (
    <Box bg="whiteGrey" width="65%" p={3} m="auto">
      <ProfileImg src={avatar} alt="User avatar" width="100px" />
      <UserName>{username}</UserName>
      <StyledText>@{tag}</StyledText>
      <StyledText>{location}</StyledText>
    </Box>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
