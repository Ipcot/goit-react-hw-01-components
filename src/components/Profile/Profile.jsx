import PropTypes from 'prop-types';
import {
  UserName,
  ProfileImg,
  StyledText,
  StatsLIst,
  StatsItem,
  StatsName,
  StatsInfo,
} from './Profile.styled';
import { Box } from 'components/Box/Box.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Box
      bg="whiteGrey"
      width="65%"
      pt={3}
      m="auto"
      border="none"
      borderRadius="normal"
      boxShadow="normal"
    >
      <ProfileImg src={avatar} alt="User avatar" width="100px" />
      <UserName>{username}</UserName>
      <StyledText>@{tag}</StyledText>
      <StyledText>{location}</StyledText>
      <StatsLIst>
        <StatsItem>
          <StatsName>Followers</StatsName>
          <StatsInfo>{stats.followers}</StatsInfo>
        </StatsItem>
        <StatsItem>
          <StatsName>Views</StatsName>
          <StatsInfo>{stats.views}</StatsInfo>
        </StatsItem>
        <StatsItem>
          <StatsName>Likes</StatsName>
          <StatsInfo>{stats.likes}</StatsInfo>
        </StatsItem>
      </StatsLIst>
    </Box>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
