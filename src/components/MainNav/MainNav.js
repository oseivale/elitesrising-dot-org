import style from './MainNav.module.css'
import { useState } from 'react'
import Image from 'next/image'
import { PageLink } from '../PageLink/PageLink'
import { Hamburger } from '../../icons/hamburger'
import { Close } from '../../icons/close'
import { Footer } from '../Footer/Footer'

const footerLinks = [
    {
        label: 'Home',
        path: '#'
    },
    {
        label: 'About',
        path: '#'
    },
    {
        label: 'Events',
        path: '#'
    },
    {
        label: 'Blog',
        path: '#'
    }
]

export function MainNav({ navLinks }) {
    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <>
            <nav className={style.container}>
                <div className={style.navWrapper}>
                    <div>
                        <Image src='' alt='' />
                    </div>
                    <ul>
                        {navLinks.map(link => (
                            <li key={link.id}>
                                <PageLink className={'btn-link-white'} label={link.label} path='#' />
                            </li>
                        ))}
                    </ul>
                    <PageLink className={'btn-link-secondary'} label={'DONATE'} path='#' />
                </div>


            </nav>
            {/* Mobile Nav */}
            <nav className={style.navContainerMobile}>
                <div className={style.navWrapperMobile}>
                    <div className={style.mobileNavWrapper}>
                        <PageLink label={'ICON'} path='/'>ICON</PageLink>
                        <button onClick={toggleMenu}>{!showMenu ? <Close /> : <Hamburger />}</button>
                    </div>

                    <div className={showMenu ? style.hide : style.mobileNavLinks}>
                        <ul className={style.mobileLinkList}>
                            {navLinks.map(link => (
                                <li key={link.id}>
                                    <PageLink className={'btn-link-white'} label={link.label} path='#' />
                                </li>
                            ))}
                        </ul>
                        {!showMenu && (
                            <div className={style.mobileFooter}>
                                <div>
                                    <p>60 Grant Ave. Carteret NJ 0708</p>
                                    <p>(880) 1723801729</p>
                                    <p>example@gmail.com</p>
                                </div>
                                <div><p className={style.copyrightText}>{`Copyright ${new Date().getFullYear()} | Elites Rising`}</p></div>
                            </div>

                        )}

                    </div>
                </div>
            </nav>
        </>

    )
}