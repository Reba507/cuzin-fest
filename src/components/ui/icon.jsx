import React from 'react';

/**
 * Centralized icon component for consistent icon management
 * @param {Object} props - Component props
 * @param {string} props.name - Icon identifier
 * @param {number} [props.size=24] - Icon size in pixels
 * @param {string} [props.className=''] - Additional CSS classes
 * @param {string} [props.color='currentColor'] - Icon color
 * @param {Object} [props.style={}] - Additional inline styles
 * @param {Function} [props.onClick] - Click handler for interactive icons
 * @param {string} [props.ariaLabel] - Accessibility label
 * @returns {React.ReactElement} Icon component
 */
const Icon = ({
  name,
  size = 24,
  className = '',
  color = 'currentColor',
  style = {},
  onClick,
  ariaLabel,
  ...props
}) => {
  const iconProps = {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: `icon icon-${name} ${className}`.trim(),
    style,
    onClick,
    'aria-label': ariaLabel || `${name} icon`,
    role: onClick ? 'button' : 'img',
    ...props
  };

  const icons = {
    // Logo Icons
    'logo-sun': (
      <svg {...iconProps} viewBox="0 0 40 40">
        <path d="M0 4C0 1.79086 1.79086 0 4 0H36C38.2091 0 40 1.79086 40 4V36C40 38.2091 38.2091 40 36 40H4C1.79086 40 0 38.2091 0 36V4Z" fill="#BEF264" />
        <rect x="19.1664" y="6.6665" width="1.66667" height="10" rx="0.833333" fill="#022C22" />
        <rect x="19.1664" y="23.3335" width="1.66667" height="10" rx="0.833333" fill="#022C22" />
        <rect x="28.8392" y="9.98291" width="1.66667" height="10" rx="0.833333" transform="rotate(45 28.8392 9.98291)" fill="#022C22" />
        <rect x="17.0537" y="21.7678" width="1.66667" height="10" rx="0.833333" transform="rotate(45 17.0537 21.7678)" fill="#022C22" />
        <rect x="23.3335" y="20.8333" width="1.66667" height="10" rx="0.833333" transform="rotate(-90 23.3335 20.8333)" fill="#022C22" />
        <rect x="6.66638" y="20.8333" width="1.66667" height="10" rx="0.833333" transform="rotate(-90 6.66638 20.8333)" fill="#022C22" />
        <rect x="21.7677" y="22.9463" width="1.66667" height="10" rx="0.833333" transform="rotate(-45 21.7677 22.9463)" fill="#022C22" />
        <rect x="9.98267" y="11.1611" width="1.66667" height="10" rx="0.833333" transform="rotate(-45 9.98267 11.1611)" fill="#022C22" />
      </svg>
    ),

    // Navigation Icons
    'arrow-right': (
      <svg {...iconProps} viewBox="0 0 20 20">
        <path d="M4.75 10H15.25" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 4.75L15.25 10L10 15.25" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),

    'menu': (
      <svg {...iconProps} viewBox="0 0 32 32">
        <path d="M5.19995 23.2H26.7999" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.19995 16H26.7999" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.19995 8.79999H26.7999" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),

    'close': (
      <svg {...iconProps} viewBox="0 0 32 32">
        <path d="M23.2 8.79999L8.80005 23.2M8.80005 8.79999L23.2 23.2" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),

    // Form Icons
    'eye': (
      <svg {...iconProps} viewBox="0 0 20 20">
        <path d="M1.75 10C1.75 10 4.75 4 10 4C15.25 4 18.25 10 18.25 10C18.25 10 15.25 16 10 16C4.75 16 1.75 10 1.75 10Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 12.25C11.2426 12.25 12.25 11.2426 12.25 10C12.25 8.75736 11.2426 7.75 10 7.75C8.75736 7.75 7.75 8.75736 7.75 10C7.75 11.2426 8.75736 12.25 10 12.25Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),

    'email': (
      <svg {...iconProps} viewBox="0 0 32 32">
        <path d="M6.4 6.39999H25.6C26.92 6.39999 28 7.47999 28 8.79999V23.2C28 24.52 26.92 25.6 25.6 25.6H6.4C5.08 25.6 4 24.52 4 23.2V8.79999C4 7.47999 5.08 6.39999 6.4 6.39999Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M28 8.8L16 17.2L4 8.8" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),

    // Solution Icons
    'ev-charging': (
      <svg {...iconProps}>
        <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="white"/>
        <circle cx="16" cy="16" r="4" fill="#022C22"/>
        <circle cx="24" cy="32" r="4" fill="#022C22"/>
        <circle cx="32" cy="16" r="4" fill="#022C22"/>
      </svg>
    ),

    'solar': (
      <svg {...iconProps}>
        <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="white"/>
        <rect x="23" y="8" width="2" height="12" rx="1" fill="#022C22"/>
        <rect x="23" y="28" width="2" height="12" rx="1" fill="#022C22"/>
        <rect x="34.6066" y="11.9792" width="2" height="12" rx="1" transform="rotate(45 34.6066 11.9792)" fill="#022C22"/>
        <rect x="20.4645" y="26.1213" width="2" height="12" rx="1" transform="rotate(45 20.4645 26.1213)" fill="#022C22"/>
        <rect x="28" y="25" width="2" height="12" rx="1" transform="rotate(-90 28 25)" fill="#022C22"/>
        <rect x="8" y="25" width="2" height="12" rx="1" transform="rotate(-90 8 25)" fill="#022C22"/>
        <rect x="26.1213" y="27.5355" width="2" height="12" rx="1" transform="rotate(-45 26.1213 27.5355)" fill="#022C22"/>
        <rect x="11.9792" y="13.3934" width="2" height="12" rx="1" transform="rotate(-45 11.9792 13.3934)" fill="#022C22"/>
      </svg>
    ),

    'wind': (
      <svg {...iconProps}>
        <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="white"/>
        <path d="M25 24C25 24.5523 24.5523 25 24 25C23.4477 25 23 24.5523 23 24C23 23.4477 23.4477 23 24 23C24.5523 23 25 23.4477 25 24Z" fill="#022C22"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M40 23C40.5523 23 41 23.4477 41 24C41 33.3888 33.3888 41 24 41C23.4477 41 23 40.5523 23 40C23 39.4477 23.4477 39 24 39C32.2843 39 39 32.2843 39 24C39 23.4477 39.4477 23 40 23Z" fill="#022C22"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M24 9C15.7157 9 9 15.7157 9 24C9 24.5523 8.55228 25 8 25C7.44772 25 7 24.5523 7 24C7 14.6112 14.6112 7 24 7C24.5523 7 25 7.44772 25 8C25 8.55228 24.5523 9 24 9Z" fill="#022C22"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M36 23C36.5523 23 37 23.4477 37 24C37 31.1797 31.1797 37 24 37C23.4477 37 23 36.5523 23 36C23 35.4477 23.4477 35 24 35C30.0751 35 35 30.0751 35 24C35 23.4477 35.4477 23 36 23Z" fill="#022C22"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M24 13C17.9249 13 13 17.9249 13 24C13 24.5523 12.5523 25 12 25C11.4477 25 11 24.5523 11 24C11 16.8203 16.8203 11 24 11C24.5523 11 25 11.4477 25 12C25 12.5523 24.5523 13 24 13Z" fill="#022C22"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M32 23C32.5523 23 33 23.4477 33 24C33 28.9706 28.9706 33 24 33C23.4477 33 23 32.5523 23 32C23 31.4477 23.4477 31 24 31C27.866 31 31 27.866 31 24C31 23.4477 31.4477 23 32 23Z" fill="#022C22"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M24 17C20.134 17 17 20.134 17 24C17 24.5523 16.5523 25 16 25C15.4477 25 15 24.5523 15 24C15 19.0294 19.0294 15 24 15C24.5523 15 25 15.4477 25 16C25 16.5523 24.5523 17 24 17Z" fill="#022C22"/>
      </svg>
    ),

    'hydro': (
      <svg {...iconProps}>
        <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="white"/>
        <path d="M23.8425 12.3779C23.9008 12.238 24.0992 12.238 24.1575 12.3779L30.1538 26.7692C31.9835 31.1605 28.7572 36 24 36C19.2428 36 16.0165 31.1605 17.8462 26.7692L23.8425 12.3779Z" fill="#022C22"/>
      </svg>
    ),

    // Social Media Icons
    'facebook': (
      <svg {...iconProps} viewBox="0 0 20 20">
        <g clipPath="url(#clip0_282_7847)">
          <path d="M11.548 19.9999V10.8776H14.6087L15.0679 7.32146H11.548V5.05136C11.548 4.02209 11.8326 3.32066 13.3103 3.32066L15.1918 3.31988V0.139123C14.8664 0.0968385 13.7495 -0.000106812 12.4495 -0.000106812C9.73488 -0.000106812 7.87642 1.65686 7.87642 4.69916V7.32146H4.8064V10.8776H7.87642V19.9999H11.548Z" fill={color}/>
        </g>
      </svg>
    ),

    'instagram': (
      <svg {...iconProps} viewBox="0 0 24 24">
        <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z" fill={color}/>
      </svg>
    ),

    'linkedin': (
      <svg {...iconProps} viewBox="0 0 24 24">
        <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill={color}/>
      </svg>
    ),

    // UI Elements
    'circle-dot': (
      <svg {...iconProps} viewBox="0 0 8 8">
        <circle cx="4" cy="4" r="4" fill={color}/>
      </svg>
    )
  };

  const IconComponent = icons[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found. Available icons: ${Object.keys(icons).join(', ')}`);
    return null;
  }

  return IconComponent;
};

export default Icon;