import PropTypes from 'prop-types';
import { Box } from 'components/Box/Box.styled';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <Box mt={4} mr="auto" ml="auto" width="25%" as="ul">
      {friends.map(({ avatar, isOnline, name, id }) => {
        return (
          <FriendListItem
            avatar={avatar}
            isOnline={isOnline}
            name={name}
            key={id}
          />
        );
      })}
    </Box>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};
