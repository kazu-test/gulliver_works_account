import React, { ReactNode, VFC } from 'react';
import styles from './style.module.scss';

type Props = {
  children: ReactNode;
  title: string;
};

const Group148: VFC<Props> = ({ children, title }) => {
  return (
    <>
      <p style={{ marginBottom: '8px' }}>{title}</p>
      <div className={styles.main}>{children}</div>
    </>
  );
};

export default Group148;
