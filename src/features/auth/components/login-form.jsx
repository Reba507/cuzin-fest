import React from 'react';
import { AuthForm } from '@components/ui';

/**
 * Login form component using the reusable AuthForm
 * @returns {React.ReactElement} Login form section
 */
const LoginForm = () => {
  const handleLogin = (formData) => {
    // Handle login submission
    console.log('Login form submitted:', formData);
    // In a real app, you would make an API call here
  };

  return (
    <AuthForm
      type="login"
      onSubmit={handleLogin}
    />
  );
};

export default LoginForm;