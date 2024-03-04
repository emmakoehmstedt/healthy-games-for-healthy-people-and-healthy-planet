import React from "react";
import TopBar from "./top-bar";
import Footer from "./footer";

import styles from "./styles/header-footer.module.css";

/*************************************************************************
 * Component: Layout
 * Description: This component includes the header and footer of the
 * application, with the children displayed between the two. This acts
 * as a layout for each page of the application.
 *************************************************************************/
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
