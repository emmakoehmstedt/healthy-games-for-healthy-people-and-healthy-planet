import React from "react";
import TopBar from "./top-bar";
import Footer from "./footer";

import styles from "./header-footer.module.css";

function Layout({ children }) {
  return (
    <div className={styles.layoutContainer}>
      <TopBar />
      <div className={styles.contentInBetween}>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
