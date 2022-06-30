import styled from 'styled-components';

export const Table = styled.table`
  table-layout: fixed;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${p => p.theme.space[4]}px;
  overflow: hidden;
  background-color: ${p => p.theme.colors.table};
  border-collapse: collapse;

  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.normal};
`;

export const TableHead = styled.thead`
  text-align: center;
  color: ${p => p.theme.colors.white};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-transform: uppercase;
  th:nth-child(1) {
    width: calc(100% / 3);
    border-right: 1px solid ${p => p.theme.colors.white};
  }

  th:nth-child(2) {
    width: calc(100% / 3);
    border-right: 1px solid ${p => p.theme.colors.white};
  }
  th:nth-child(3) {
    width: calc(100% / 3);
  }

  th,
  td {
    padding: 20px;
    overflow: hidden;
  }
`;

export const TableBody = styled.tbody`
  text-align: center;
  color: ${p => p.theme.colors.text};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.normal};
  tr:nth-child(odd) {
    background-color: ${p => p.theme.colors.whiteGrey};
  }

  tr:nth-child(even) {
    background-color: ${p => p.theme.colors.background};
  }

  td:nth-child(2) {
    padding: ${p => p.theme.space[4]}px;
    border-right: 1px solid ${p => p.theme.colors.liteGrey};
    border-left: 1px solid ${p => p.theme.colors.liteGrey};
  }
`;
