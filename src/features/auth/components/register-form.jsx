import React from 'react';
import { AuthForm } from '@components/ui';

/**
 * Register form component using the reusable AuthForm
 * @returns {React.ReactElement} Register form section
 */
const RegisterForm = () => {
  const handleRegister = (formData) => {
    // Handle register submission
    console.log('Register form submitted:', formData);
    // In a real app, you would make an API call here
  };

  return (
    <AuthForm
      type="register"
      onSubmit={handleRegister}
    />
  );
};

export default RegisterForm;