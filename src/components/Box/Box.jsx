import PropTypes from 'prop-types';

export const Box = ({ children }) => {
  return <div>{children}</div>;
};

Box.propTypes = {
  children: PropTypes.node,
};
