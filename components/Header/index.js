import Link from 'next/link'
import React from 'react'
import styles from "./styles.module.css";

const index = () => {
  return (
    <header className={styles.header}>
        <Link className={styles.logo} href="/">
            <span>Blog</span>
        </Link>
        <nav>
            <Link href="https://github.com/mertkasapp"target={'_blank'}>
                About
            </Link>
        </nav>
    </header>
  )
}

export default index