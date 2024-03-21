import Link from 'next/link'
import style from './PageWrapper.module.css'
import { arimo, candal, nunito_sans, raleway, titillium_web } from '@/fonts/fonts'
import { Truculenta } from 'next/font/google'

export function PageWrapper() {
    return (
        <div>
            <section className={style.pageHeader}>
                <div className={`${candal.className} ${style.headerWrapper}`}><h1>About Us</h1></div>
                <div className={style.imageWrapper}></div>

            </section>
            <div className={style.contentWrapper}>
                <aside className={`${style.sideBar}`}>
                    <div>
                        <h1 className={nunito_sans.className}>Address</h1>
                    </div>
                    {/* <Link className={style.quickLink} href='#'>Blog</Link> */}
                    <div>
                        <h1 className={nunito_sans.className}>Contact Info</h1>
                    </div>
                </aside>
                <div className={style.content}>
                    <h1 className={nunito_sans.className}>Who we are</h1>
                    <p className={titillium_web.className}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>

    )
}