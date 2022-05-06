import React from 'react'
import styles from './Navbar.module.css';
import myPic from '../../public/Logo.jpg';
import Image from 'next/image'
import Link from 'next/link';
export default function NavBar() {
  return (
    <div>  
        <nav className={styles.navbar}>
             <div className={styles.navlogo}><Image src={myPic} width={70} height={50}/></div>
            <a href="#" className={styles.ham}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </a>
            <div className={styles.navlinks}>
                <ul>
                    <li><Link href="/">خانه</Link></li>
                    <li><Link href="/AboutUs">درباره ما</Link></li>
                    <li><Link href="/Contact">تماس با ما</Link></li>
                    <li><Link href="/Services">خدمات</Link></li>
                </ul>
            </div>
        </nav>
    </div>
  )
}
