import PropTypes from 'prop-types';
import { Box } from 'components/Box/Box.styled';
import { FriendStatus, Avatar, FriendName } from './FriendListItem.styled';
export const FriendListItem = ({ avatar, isOnline, name }) => {
  return (
    <Box
      mb={3}
      p={4}
      display="flex"
      justifyContent="flex-start"
      bg="background"
      borderRadius="normal"
      boxShadow="normal"
      as="li"
    >
      <FriendStatus isOnline={isOnline}> </FriendStatus>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </Box>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
