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

export const StatsLIst = styled.ul`
  margin: ${p => p.theme.space[0]}px;
  padding: ${p => p.theme.space[0]}px;
  display: flex;
  border-bottom-left-radius: ${p => p.theme.radii.normal};
  border-bottom-right-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.liteGrey};
`;

export const StatsItem = styled.li`
  display: flex;

  align-items: center;
  flex-direction: column;
  width: calc(100% / 3);
  border-top: solid ${p => p.theme.colors.border} 1px;
  :not(:last-child) {
    border-right: solid ${p => p.theme.colors.border} 1px;
  }

  padding: ${p => p.theme.space[4]}px;
`;

export const StatsName = styled.span`
  color: ${p => p.theme.colors.text};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.normal};
  /* display: block; */
`;

export const StatsInfo = styled.span`
  padding-top: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.title};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
