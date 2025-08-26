import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async (context, next) => {
  const { url, cookies, redirect } = context;

  // check cookie named "token"
  const token = cookies.get('token')?.value;

  // Protected /dashboard
  if (url.pathname.startsWith('/dashboard') && !token) {
    return redirect('/auth/login');
  }

  return next();
};
