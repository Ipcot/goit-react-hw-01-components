import { Profile } from './Profile/Profile';
import user from 'user.json';
import { Box } from './Box/Box';
console.log(user);
export const App = () => {
  return (
    <Box>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
      ></Profile>
    </Box>
  );
};
