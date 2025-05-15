import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../components/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();

  const savedForm = JSON.parse(localStorage.getItem('signupFormData')) || {};

  const {
    register,
    handleSubmit,
    watch,
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
    localStorage.setItem('signupFormData', JSON.stringify(watchedFields));
  }, [watchedFields]);

  const onSubmit = async (data) => {
    const file = data.profileImage?.[0];

    const toBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });

    const base64Image = file ? await toBase64(file) : null;

    const user = {
      email: data.email,
      password: data.password,
      profileImage: base64Image,
    };

  
    signup(user);
    localStorage.setItem('user', JSON.stringify(user));

  
    localStorage.removeItem('signupFormData');

  
    reset();

    navigate('/sign-in');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Sign Up</h2>

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

      <input type="file" {...register('profileImage')} accept="image/*" />

      <button type="submit">Sign Up</button>

      <p>
        Already have an account? <Link to="/sign-in">Sign In</Link>
      </p>
    </form>
  );
};

export default SignUp;
