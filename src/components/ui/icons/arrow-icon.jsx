import PropTypes from 'prop-types';

const ArrowIcon = ({
  width = 20,
  height = 20,
  className = '',
  color = 'currentColor',
  direction = 'right'
}) => {
  const getRotation = () => {
    switch (direction) {
      case 'up': return 'rotate(-90deg)';
      case 'down': return 'rotate(90deg)';
      case 'left': return 'rotate(180deg)';
      case 'right':
      default: return 'rotate(0deg)';
    }
  };

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ transform: getRotation() }}
    >
      <path
        d="M4.75 10H15.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 4.75L15.25 10L10 15.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
  color: PropTypes.string,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right'])
};

export default ArrowIcon;