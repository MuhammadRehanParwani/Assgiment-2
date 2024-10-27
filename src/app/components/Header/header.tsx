import Link from 'next/link';
import styles from "./header.module.css";


const Header = ()=>{
    return (
        <header className={styles.header}>
        <div className={styles.logo}>
          
          

          
        </div>
        <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about">About</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
</header>
)
}

export default Header;