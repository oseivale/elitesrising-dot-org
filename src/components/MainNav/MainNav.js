import style from './MainNav.module.css'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { PageLink } from '../PageLink/PageLink'
import { Hamburger } from '../../icons/hamburger'
import { Close } from '../../icons/close'
import { Footer } from '../Footer/Footer'
import Link from 'next/link'
import { nunito_sans } from '@/fonts/fonts'
import { TestLogo } from '@/icons/test-logo'

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
    const [open, setOpen] = useState(false)
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        handleScroll()

        // Add event listener when component mounts
        window.addEventListener('scroll', handleScroll);

        // Remove event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures that this effect runs only once on mount

    const toggleOpen = () => {
        setOpen(!open)
    }

    return (
        <>
            <nav className={`${style.navContainer} ${open ? style.open : style.close} `}>
                <div className={scrollY > 50 ? style.coloredNavWrapper : style.mobileNavWrapper}>
                    <Link className={style.navLogo} href='/'>ICON</Link>

                    <button onClick={toggleOpen}>{open ? <Close /> : <Hamburger />}</button>
                </div>
                {open && (
                    <ul className={style.mobileNavLinkWrapper}>
                        {navLinks.map(navLink => {
                            return (
                                <li className={nunito_sans.className} key=''>
                                    <Link href={navLink.path}>{navLink.label}</Link>
                                </li>
                            )

                        })}
                    </ul>
                )}
            </nav>
            <nav className={style.mobileNavContainer}>
                <div className={scrollY > 50 ? style.coloredNavWrapper : style.navWrapper}>
                    <Link className={style.navLogo} href='/'><TestLogo /></Link>
                    <ul>
                        {navLinks.map(navLink => {
                            return (
                                <li className={`${style.linkWrapper} ${nunito_sans.className}`} key=''>
                                    <Link className={style.navLink} href={navLink.path}>{navLink.label}</Link>
                                </li>
                            )
                        })}
                        <Link className={style.donate} label={'DONATE'} href='#'>DONATE</Link>
                    </ul>
                </div>
            </nav>
        </>

    )
}