import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <p>Passion Connect</p>
            <p>&copy; {new Date().getFullYear()} All rights reserved</p>
        </div>
    );
}

export default Footer;