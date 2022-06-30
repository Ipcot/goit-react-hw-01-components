import PropTypes from 'prop-types';
import { Box } from 'components/Box/Box.styled';
import {
  StatisticTitle,
  StatisticItem,
  StatisticInfo,
  StatisticData,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Box
      width="30%"
      mt={4}
      mr="auto"
      ml="auto"
      bg="background"
      overflow="hidden"
      borderRadius="normal"
      boxShadow="normal"
      as="section"
    >
      {title && <StatisticTitle>{title}</StatisticTitle>}
      <Box
        width="100%"
        m="auto"
        p={0}
        display="flex"
        borderRadius="normal"
        as="ul"
      >
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatisticItem
              key={id}
              style={{ backgroundColor: `${getRandomHexColor()}` }}
            >
              <StatisticInfo>{label}</StatisticInfo>
              <StatisticData>{percentage}%</StatisticData>
            </StatisticItem>
          );
        })}
      </Box>
    </Box>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
