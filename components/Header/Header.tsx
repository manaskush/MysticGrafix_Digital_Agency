import React, { useState, useEffect, useRef } from "react";
import styles from "./Header.module.css";
import { FaHome, FaUser, FaCommentDots, FaCamera, FaCog } from "react-icons/fa";

const Header: React.FC = () => {
   const [activeIndex, setActiveIndex] = useState<number | null>(null);

   const handleMouseEnter = (index: number) => {
       setActiveIndex(index);
   };

   const handleMouseLeave = () => {
       setActiveIndex(null);
   };

   return (
       <header className={styles.header}>
           <nav className={styles.navbar}>
               {[
                   { icon: <FaHome />, label: "Home" },
                   { icon: <FaUser />, label: "Profile" },
                   { icon: <FaCommentDots />, label: "Message" },
                   { icon: <FaCamera />, label: "Camera" },
                   { icon: <FaCog />, label: "Settings" },
               ].map((item, index) => (
                   <div
                       key={index}
                       className={`${styles.navItem} ${
                           activeIndex === index ? styles.active : ""
                       }`}
                       onMouseEnter={() => handleMouseEnter(index)}
                       onMouseLeave={handleMouseLeave}
                   >
                       <div className={styles.iconContainer}>
                           <div className={styles.greenCircle}></div>
                           <div className={styles.icon}>{item.icon}</div>
                       </div>
                       <p className={styles.label}>{item.label}</p>
                   </div>
               ))}
           </nav>
       </header>
   );
};

export default Header;
