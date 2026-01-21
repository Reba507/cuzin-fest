import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Input, Button } from '../';
import { getRouteByName } from '@app/router';

/**
 * Reusable authentication form component
 * @param {Object} props - Component props
 * @param {'login'|'register'} props.type - Form type
 * @param {Function} [props.onSubmit] - Form submission handler
 * @param {Object} [props.fields] - Form field configuration
 * @param {boolean} [props.showGoogleAuth=true] - Whether to show Google authentication
 * @param {string} [props.className=''] - Additional CSS classes
 * @returns {React.ReactElement} AuthForm component
 */
const AuthForm = ({
  type,
  onSubmit,
  fields = {},
  showGoogleAuth = true,
  className = ''
}) => {
  const isLogin = type === 'login';
  const isRegister = type === 'register';

  const defaultFields = {
    ...(isRegister && { fullName: '' }),
    email: '',
    password: ''
  };

  const [formData, setFormData] = useState({ ...defaultFields, ...fields });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  }, [errors]);

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword(prev => !prev);
  }, []);

  const validateForm = useCallback(() => {
    const newErrors = {};

    if (isRegister && !formData.fullName?.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password?.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData, isRegister]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (onSubmit) {
      onSubmit(formData);
    } else {
      console.log(`${type} form submitted:`, formData);
    }
  }, [formData, onSubmit, type, validateForm]);

  const title = isLogin ? 'Login' : 'Create your account';
  const submitText = isLogin ? 'Login' : 'Create account';
  const googleText = isLogin ? 'Sign in with Google' : 'Continue with Google';
  const alternativeText = isLogin ? 'New here?' : 'Already have an account?';
  const alternativeLink = isLogin ? getRouteByName('register') : getRouteByName('login');
  const alternativeLinkText = isLogin ? 'Create an account' : 'Login';

  return (
    <section className={`relative pt-52 xs:pt-40 pb-16 md:pb-24 lg:pb-52 bg-orange-50 overflow-hidden ${className}`}>

      {/* Alternative Action */}
      <p className="absolute top-0 right-0 mt-32 xs:mt-12 mr-5">
        <span>{alternativeText}</span>
        <Link to={alternativeLink} className="inline-block font-medium underline hover:text-lime-600 ml-1">
          {alternativeLinkText}
        </Link>
      </p>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-sm mx-auto">
          <form onSubmit={handleSubmit} noValidate>
            <h1 className="text-4xl text-center font-medium mb-10">{title}</h1>

            {isRegister && (
              <Input
                label="Full name"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                error={errors.fullName}
                required
                className="mb-6"
              />
            )}

            <Input
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              error={errors.email}
              required
              className="mb-6"
            />

            <div className="mb-6">
              <label className="block pl-4 mb-1 text-sm font-medium" htmlFor={`${type}-password`}>
                Password
              </label>
              <div className="relative">
                <input
                  className={`relative w-full px-4 py-3 outline-none ring-offset-0 transition duration-200 shadow rounded-full ${
                    errors.password
                      ? 'border-red-500 focus:ring-2 focus:ring-red-500'
                      : 'focus:ring-2 focus:ring-lime-500'
                  }`}
                  type={showPassword ? 'text' : 'password'}
                  id={`${type}-password`}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  aria-describedby={errors.password ? `${type}-password-error` : undefined}
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-0 transform -translate-y-1/2 mr-4 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                  onClick={togglePasswordVisibility}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  <Icon name="eye" size={20} color="currentColor" />
                </button>
              </div>
              {errors.password && (
                <span id={`${type}-password-error`} className="mt-1 text-sm text-red-600">
                  {errors.password}
                </span>
              )}
            </div>

            {isLogin && (
              <div className="text-right mb-10">
                <a className="inline-block text-sm underline font-medium hover:text-lime-600 transition-colors duration-200" href="#">
                  Forgot password?
                </a>
              </div>
            )}

            <Button
              type="submit"
              variant="primary"
              size="large"
              className="w-full mb-4 bg-teal-900 hover:bg-lime-500 border-teal-900 hover:border-lime-500 text-white hover:text-teal-900"
            >
              {submitText}
            </Button>

            {showGoogleAuth && (
              <>
                <div className="text-center py-4 mx-auto text-gray-700">
                  <span>or</span>
                </div>

                <Button
                  variant="outline"
                  size="large"
                  className="w-full border-teal-900 hover:bg-black hover:border-black text-black hover:text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log('Google authentication clicked');
                  }}
                >
                  <img
                    src="images/google-icon.svg"
                    alt=""
                    className="mr-4"
                    loading="lazy"
                  />
                  <span>{googleText}</span>
                </Button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default AuthForm;