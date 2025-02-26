import React from 'react';
import styles from '../app/terminal/terminal.module.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Layout;