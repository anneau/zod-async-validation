import styles from './repositories.module.css';

/* eslint-disable-next-line */
export interface RepositoriesProps {}

export function Repositories(props: RepositoriesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Repositories!</h1>
    </div>
  );
}

export default Repositories;
