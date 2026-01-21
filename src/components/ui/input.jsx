import React, { useState } from 'react';

/**
 * Input component with consistent styling and validation support
 * @param {Object} props - Component props
 * @param {'text'|'email'|'password'|'tel'|'url'|'search'|'number'} [props.type='text'] - Input type
 * @param {string} [props.placeholder=''] - Input placeholder text
 * @param {string} [props.value] - Input value (controlled)
 * @param {Function} [props.onChange] - Change handler
 * @param {Function} [props.onBlur] - Blur handler
 * @param {Function} [props.onFocus] - Focus handler
 * @param {string} [props.label] - Input label
 * @param {string} [props.error] - Error message to display
 * @param {boolean} [props.required=false] - Whether input is required
 * @param {boolean} [props.disabled=false] - Whether input is disabled
 * @param {string} [props.className=''] - Additional CSS classes
 * @param {string} [props.name] - Input name attribute
 * @param {string} [props.id] - Input id attribute
 * @returns {React.ReactElement} Input component
 */
const Input = ({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  onBlur,
  onFocus,
  label,
  error,
  required = false,
  disabled = false,
  className = '',
  name,
  id,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const baseClasses = 'w-full px-4 py-3 placeholder-gray-700 outline-none ring-offset-0 transition duration-200 shadow';
  const stateClasses = error
    ? 'border-red-500 focus:ring-2 focus:ring-red-500'
    : `focus:ring-2 focus:ring-lime-500 ${isFocused ? 'ring-2 ring-lime-500' : ''}`;
  const disabledClasses = disabled
    ? 'bg-gray-100 cursor-not-allowed opacity-50'
    : 'bg-white';

  const inputClasses = `
    ${baseClasses}
    ${stateClasses}
    ${disabledClasses}
    rounded-full
    ${className}
  `.trim();

  const handleFocus = (e) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const inputId = id || name || `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="flex flex-col">
      {label && (
        <label
          htmlFor={inputId}
          className={`mb-2 text-sm font-medium ${error ? 'text-red-700' : 'text-gray-700'}`}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className={inputClasses}
        {...props}
      />
      {error && (
        <span className="mt-1 text-sm text-red-600">
          {error}
        </span>
      )}
    </div>
  );
};


export default Input;