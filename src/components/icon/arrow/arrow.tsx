import React from "react";

import styles from "./arrow.module.css";

interface ArrowProps {
    fill: string;
    size?: string;
    onClick?: () => void;
    partial?: "left" | "right";
}

const Arrow: React.FC<ArrowProps> = ({fill, size, onClick, partial = "left"}) => {
  return (
    <svg onClick={onClick} className={styles[partial]} style={{fill, width: size, height: size}} width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.25 9.60938C0.25 9.77865 0.279297 9.9349 0.337891 10.0781C0.402995 10.2214 0.500651 10.3581 0.630859 10.4883L8.23828 17.9297C8.45964 18.151 8.72656 18.2617 9.03906 18.2617C9.25391 18.2617 9.44596 18.2096 9.61523 18.1055C9.79102 18.0078 9.93099 17.8711 10.0352 17.6953C10.1393 17.526 10.1914 17.3372 10.1914 17.1289C10.1914 16.8164 10.071 16.5397 9.83008 16.2988L2.97461 9.60938L9.83008 2.91992C10.071 2.67904 10.1914 2.4056 10.1914 2.09961C10.1914 1.88477 10.1393 1.69271 10.0352 1.52344C9.93099 1.35417 9.79102 1.2207 9.61523 1.12305C9.44596 1.01888 9.25391 0.966797 9.03906 0.966797C8.72656 0.966797 8.45964 1.07422 8.23828 1.28906L0.630859 8.73047C0.500651 8.86068 0.402995 8.9974 0.337891 9.14062C0.279297 9.28385 0.25 9.4401 0.25 9.60938Z" style={{fill}}/>
    </svg>
  );
};

export default Arrow;