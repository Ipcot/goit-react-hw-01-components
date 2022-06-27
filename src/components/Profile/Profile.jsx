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
    <>
      <Box
        bg="whiteGrey"
        width="100%"
        pt={3}
        pb={4}
        m="auto"
        borderTop="greyBorder"
        borderTopLeftRadius="normal"
        borderTopRightRadius="normal"
        boxShadow="normal"
      >
        <ProfileImg src={avatar} alt="User avatar" width="100px" />
        <UserName>{username}</UserName>
        <StyledText>@{tag}</StyledText>
        <StyledText>{location}</StyledText>
      </Box>
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
    </>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
