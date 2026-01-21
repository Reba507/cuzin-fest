import PropTypes from 'prop-types';

const CloseIcon = ({
  width = 32,
  height = 32,
  className = '',
  color = '#1D1F1E'
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M23.2 8.79999L8.80005 23.2M8.80005 8.79999L23.2 23.2"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

CloseIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
  color: PropTypes.string
};

export default CloseIcon;