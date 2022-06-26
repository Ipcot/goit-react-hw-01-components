import { Profile } from './Profile/Profile';
import user from 'user.json';
import { Box } from './Box/Box.styled';
console.log(user);
export const App = () => {
  return (
    <Box bg="background" width="30%" m="auto" p={6}>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
      ></Profile>
    </Box>
  );
};
