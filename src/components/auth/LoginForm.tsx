import { useLogin } from '@/hooks/useLogin';
import { useState } from 'react';
import QueryProvider from '../QueryProvider';

const LoginFormContent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { mutate: login, isPending: isLoggingIn, error } = useLogin();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <div className="flex justify-center h-full items-center flex-col gap-y-6 bg-gray-50">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="space-y-8 border px-6 py-20 max-w-lg">
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="border p-2 rounded w-full"
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="border p-2 rounded w-full"
        />
        <button type="submit" disabled={isLoggingIn} className="bg-blue-500 text-white p-2 rounded">
          {isLoggingIn ? 'Logging in...' : 'Login'}
        </button>
        {error?.message && <p className="text-red-500 font-bold">{error.message}</p>}
      </form>
    </div>
  );
};

export default function LoginForm() {
  return (
    <QueryProvider>
      <LoginFormContent />
    </QueryProvider>
  );
}
