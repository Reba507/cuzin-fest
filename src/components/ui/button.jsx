
/**
 * Button component for consistent styling across the application
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Button content
 * @param {'primary'|'secondary'|'outline'|'link'|'register'} [props.variant='primary'] - Button style variant
 * @param {'small'|'default'|'large'} [props.size='default'] - Button size
 * @param {string} [props.className=''] - Additional CSS classes
 * @param {boolean} [props.disabled=false] - Whether button is disabled
 * @param {Function} [props.onClick] - Click handler
 * @param {'button'|'submit'|'reset'} [props.type='button'] - Button type
 * @returns {React.ReactElement} Button component
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'default',
  className = '',
  disabled = false,
  onClick,
  type = 'button',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantClasses = {
    primary: 'text-teal-900 border border-lime-500 hover:border-white bg-lime-500 hover:bg-white focus:ring-lime-500',
    secondary: 'text-white hover:text-teal-900 border border-white hover:bg-white focus:ring-white',
    outline: 'text-teal-900 hover:text-white border border-teal-900 hover:bg-teal-900 focus:ring-teal-900',
    link: 'text-gray-700 hover:text-gray-900',
    register: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500'
  };

  const sizeClasses = {
    small: 'py-2 px-4 text-sm rounded-full',
    default: 'py-2.5 px-4 text-sm rounded-full',
    large: 'py-4 px-6 text-lg rounded-full'
  };

  const disabledClasses = disabled
    ? 'opacity-50 cursor-not-allowed pointer-events-none'
    : '';

  const classes = `
    ${baseClasses}
    ${variantClasses[variant] || variantClasses.primary}
    ${sizeClasses[size]}
    ${disabledClasses}
    ${className}
  `.trim();

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};


export default Button;