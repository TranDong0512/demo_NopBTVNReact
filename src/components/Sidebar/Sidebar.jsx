import React from "react";
import NavItem from "./NavItem";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const navItems = [
    { id: 1, label: "Task 44", path: "/task44" },
    { id: 2, label: "Task 45", path: "/task45" },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <h1 className={styles.title}>LEARN REACT</h1>
      </div>
      <nav className={styles.nav}>
        <ul>
          {navItems.map((item) => (
            <NavItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              active={item.active}
              path={item.path}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
