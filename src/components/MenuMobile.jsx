import React from 'react';
import styles from '@styles/MenuMobile.module.scss';
import Link from 'next/link';

const MenuMobile = () => {
    return (
        <div className={styles.MobileMenu}>
            <ul>
                <li>
                    Categorías
                </li>
                <li>
                    <Link href={"/"}>
                        Todo
                    </Link>
                </li>
                <li>
                    <Link href={"/"}>
                        Ropa
                    </Link>
                </li>
                <li>
                    <Link href={"/"}>
                        Electrónicos
                    </Link>
                </li>
                <li>
                    <Link href={"/"}>
                        Juguetes
                    </Link>
                </li>
                <li>
                    <Link href={"/"}>
                        Otros
                    </Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link href={"/"}>
                        Mis ordenes
                    </Link>
                </li>
                <li>
                    <Link href={"/"}>
                        Mi cuenta 
                    </Link>
                </li>
            </ul>

            <ul>
                <li>
                    <Link className={styles["email"]} href={"/"}>
                        correo@prueba.com
                    </Link>
                </li>
                <li>
                    <Link href={"/"} className={styles["sign-out"]}>
                        Cerrar sesión
                    </Link>
                </li>
            </ul>

        </div>
    )
}

export default MenuMobile
