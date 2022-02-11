import { client, checkError } from './client.js';

export function getUser() {
  return client.auth.session();
}

export async function signIn(email, password) {
  const response = await client.auth.signIn({
    email: email,
    password: password,
  });

  return response.user;
}

export async function signUp(email, password) {
  const response = await client.auth.signUp({
    email: email,
    password: password,
  });

  return response.user;
}

export async function logout() {
  await client.auth.signOut();

  return window.location.href = '../';
}