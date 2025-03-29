// components/LinkHover.js
import React from 'react';
import styles from '../css/LinkHover.module.css'; // ใช้ CSS Module

const LinkHover = ({ text }) => {
  //const text = "About"; // ข้อความที่ต้องการแสดงใน Link

  return (
    <p  className={styles.link}>
      {text.split('').map((char, index) => (
        <span key={index} className={styles.letter} style={{ animationDelay: `${index * 0.1}s` }}>
          {char}
        </span>
      ))}
    </p>
  );
};

export default LinkHover;
