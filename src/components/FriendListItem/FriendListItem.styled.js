import styled from 'styled-components';

export const FriendStatus = styled.span`
  padding: ${p => p.theme.space[1]}px;
  width: ${p => p.theme.space[5]}px;
  background-color: ${p =>
    p.isOnline ? p.theme.colors.green : p.theme.colors.red};
  border-radius: ${p => p.theme.radii.round};
`;

export const Avatar = styled.img`
  padding-left: ${p => p.theme.space[4]}px;
`;

export const FriendName = styled.p`
  text-align: center;
  margin: ${p => p.theme.space[0]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-top: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.black};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.normal};
`;
