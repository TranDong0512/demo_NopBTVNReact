import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

const NavItem = ({ icon, label, active, path }) => (
  <NavLink
    to={path}
    className={`${styles.navItem} ${active ? styles.navItemActive : ""}`}>
    <span className={styles.icon}>{icon}</span>
    <span className={styles.label}>{label}</span>
  </NavLink>
);

export default NavItem;
