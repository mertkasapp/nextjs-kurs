import Link from 'next/link';
import React from 'react'
import styles from "../BlogCards/styles.module.css";
import Image from "next/image";
const index = () => {
    return (
        <div>
            <Link className={styles.kapsa} href="/">
                <div className={styles.cards}>
                    <Image src="https://picsum.photos/seed/picsum/200/300" alt='Blog Card İmage' width={96} height={96} />
                </div>
                <div className={styles.content}>
                    <h2>Lorem ipsun dolar</h2>
                    <p>Lorem ipsun dolar sit amet Lorem ipsun dolar sit ametLorem ipsun dolar sit amet Lorem ipsun dolar sit amet</p>
                </div>
            </Link>
            <Link className={styles.kapsa} href="/">
                <div className={styles.cards}>
                    <Image src="https://picsum.photos/seed/picsum/200/300" alt='Blog Card İmage' width={96} height={96} />
                </div>
                <div className={styles.content}>
                    <h2>Lorem ipsun dolar</h2>
                    <p>Lorem ipsun dolar sit amet Lorem ipsun dolar sit ametLorem ipsun dolar sit amet Lorem ipsun dolar sit amet</p>
                </div>
            </Link>
            <Link className={styles.kapsa} href="/">
                <div className={styles.cards}>
                    <Image src="https://picsum.photos/seed/picsum/200/300" alt='Blog Card İmage' width={96} height={96} />
                </div>
                <div className={styles.content}>
                    <h2>Lorem ipsun dolar</h2>
                    <p>Lorem ipsun dolar sit amet Lorem ipsun dolar sit ametLorem ipsun dolar sit amet Lorem ipsun dolar sit amet</p>
                </div>
            </Link>
            <Link className={styles.kapsa} href="/">
                <div className={styles.cards}>
                    <Image src="https://picsum.photos/seed/picsum/200/300" alt='Blog Card İmage' width={96} height={96} />
                </div>
                <div className={styles.content}>
                    <h2>Lorem ipsun dolar</h2>
                    <p>Lorem ipsun dolar sit amet Lorem ipsun dolar sit ametLorem ipsun dolar sit amet Lorem ipsun dolar sit amet</p>
                </div>
            </Link>
        </div>
    )
}

export default index