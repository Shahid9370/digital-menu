import { fetchClient } from './client.js';

export const login = async (username, password) => {
  // Placeholder for auth API
  return { success: true, token: 'mock-token' };
  // return fetchClient('/auth/login', {
  //   method: 'POST',
  //   body: JSON.stringify({ username, password }),
  // });
};