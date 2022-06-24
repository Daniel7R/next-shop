import React, { useState, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import cartImage from '@icons/icon_shopping_cart.svg';
import { Menu } from '@components/Menu';
import { AppContext } from '@context/AppContext';
import { MyOrder } from '@containers/MyOrder';
import MenuMobile from '@components/MenuMobile';
import styles from '@styles/Header.module.scss';

const Header = () => {

    const { state: { cart,
        toggleOrders,
        toggleMenu
    },
        toggleCart,
        handleMenu
    } = useContext(AppContext);

    const [toggleMenuMobile, setToggleMenuMobile] = useState(false);

    return (
        <nav className={styles.Nav}>
            <img src={menu.src} onClick={() => setToggleMenuMobile(!toggleMenuMobile)} alt="menu" className={styles.menu} />
            {
                toggleMenuMobile && <MenuMobile />
            }
            <div className={styles['navbar-left']}>
                <Link style={{ display: "flex" }} href={"/"}>
                        <Image src={logo} alt="logo" className={styles['logo-navbar']} />
                </Link>
                <ul>
                    <li>
                        <Link href='/'>
                            Todo
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            Ropa
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            Electrónicos
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            Juguetes
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            Otros
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles["navbar-right"]}>
                <ul>
                    <li className={styles["navbar-email"]} onClick={handleMenu}>
                        correo@prueba.com
                    </li>
                    <li className={styles["navbar-shopping-cart"]} onClick={toggleCart}>
                        <Image src={cartImage} alt="shopping-cart" />
                        <div>{cart.length}</div>
                    </li>
                </ul>
            </div>
            {
                toggleMenu && <Menu />
            }
            {
                toggleOrders && <MyOrder />
            }
        </nav>

    )
}

export { Header };