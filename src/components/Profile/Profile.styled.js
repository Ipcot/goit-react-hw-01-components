import styled from 'styled-components';

export const UserName = styled.p`
  text-align: center;
  color: ${p => p.theme.colors.title};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  padding: ${p => p.theme.space[1]}px;
`;

export const ProfileImg = styled.img`
  display: block;
  margin: auto;
  border: 1px solid black;
  border-radius: ${p => p.theme.radii.round};
`;

export const StyledText = styled.p`
  text-align: center;
  color: ${p => p.theme.colors.text};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
  padding: ${p => p.theme.space[1]}px;
`;
