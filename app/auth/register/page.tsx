// app/auth/register/page.tsx
import React from 'react';

const RegisterPage: React.FC = () => {
  return (
    <main>
      <h1>Register</h1>
      <form>
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
    </main>
  );
};

export default RegisterPage;
