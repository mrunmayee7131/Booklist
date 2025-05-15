import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';

const SignIn = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const savedForm = JSON.parse(localStorage.getItem('signinFormData')) || {};

  const {
    register,
    handleSubmit,
    watch,
    setError,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: savedForm.email || '',
      password: savedForm.password || '',
    },
  });

  const watchedFields = watch();
  useEffect(() => {
    localStorage.setItem('signinFormData', JSON.stringify(watchedFields));
  }, [watchedFields]);

  const onSubmit = (data) => {
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (!storedUser) {
      setError('email', { type: 'manual', message: 'User not found. Please sign up.' });
      return;
    }

    if (data.email !== storedUser.email || data.password !== storedUser.password) {
      setError('password', { type: 'manual', message: 'Invalid credentials' });
      return;
    }

    login(storedUser);

   
    localStorage.removeItem('signinFormData');

   
    reset();

    navigate('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Sign In</h2>

      <input
        {...register('email', { required: 'Email is required' })}
        placeholder="Email"
      />
      {errors.email && <p>{errors.email.message}</p>}

      <input
        type="password"
        {...register('password', { required: 'Password is required' })}
        placeholder="Password"
      />
      {errors.password && <p>{errors.password.message}</p>}

      <button type="submit">Sign In</button>

      <p>
        Don’t have an account? <Link to="/sign-up">Sign Up</Link>
      </p>
    </form>
  );
};

export default SignIn;
