import styled from 'styled-components';

export const StatisticTitle = styled.h2`
  margin: 0;
  text-align: center;
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.whiteGrey};
  padding: ${p => p.theme.space[4]}px;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-transform: uppercase;
`;

export const StatisticItem = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(100% / 5);
`;

export const StatisticInfo = styled.span`
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  text-align: center;
  color: ${p => p.theme.colors.white};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.xss};
  font-weight: ${p => p.theme.fontWeights.normal};
`;

export const StatisticData = styled.span`
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  text-align: center;
  color: ${p => p.theme.colors.white};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
`;
