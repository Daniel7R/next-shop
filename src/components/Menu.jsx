import React from 'react';
import styles from '@styles/Menu.module.scss'
import Link from 'next/link';

const Menu = () => {
    return (
        <div className={ styles.Menu }>
            <ul>
                <li>
                    <Link href='/orders' className={styles['title']}>
                         Mis ordenes
                    </Link>
                </li>
                <li>
                    <Link href="/account"> Mi cuenta</Link>
                </li>
                <li>
                    <Link href="/">
                        Cerrar Sesión
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export {Menu};
