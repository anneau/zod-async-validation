type Props = {
  path: string;
  token: string;
  init?: RequestInit;
};

export const fetchGithub = async (props: Props) => {
  return await fetch(`https://api.github.com${props.path}`, {
    headers: {
      ...props.init?.headers,
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${props.token}`,
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });
};
