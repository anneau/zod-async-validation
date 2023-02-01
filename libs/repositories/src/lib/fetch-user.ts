import { fetchGithub } from './fetch-github';

export const fetchUser = async (token: string, username: string) => {
  return await fetchGithub({ path: `/users/${username}`, token });
};
