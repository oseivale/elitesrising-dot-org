import Image from "next/image"
import { PageLink } from "../PageLink/PageLink"
import style from './Footer.module.css'
import { nunito_sans } from "@/fonts/fonts"
import { Facebook } from "@/icons/facebook"
import { LinkedIn } from "@/icons/linkedin"
import { Instagram } from "@/icons/instagram"

export function Footer({ footerLinks, socialLogos, brandLogo }) {
    return (
        <footer className={style.footerContainer}>
            <div className={style.footerGridWrapper}>
                <div className={`${nunito_sans.className}`}>
                    <p>60 Grant Ave. Carteret NJ 0708</p>
                    <p>(880) 1723801729</p>
                    <p>example@gmail.com</p>
                    <div className={style.socialLinksContainer}>
                        <h1>Stay Connected</h1>
                        <div className={style.socialLinksWrapper}>
                            <div>
                                <Facebook />
                            </div>
                            <div><LinkedIn /></div>
                            <div><Instagram /></div>

                        </div>

                    </div>
                </div>
                <div className={`${style.mobileLinkList} ${nunito_sans.className}`}>
                    <h1>Quick Links</h1>
                    <ul>
                        {footerLinks.map((footerLink, index) => (
                            <li key={index}>
                                <PageLink path={footerLink.path} label={footerLink.label} className={'btn-link-white'} />
                            </li>

                        ))}
                    </ul>
                </div>
            </div>

            <div><p className={style.copyrightText}>{`Copyright ${new Date().getFullYear()} | Elites Rising`}</p></div>
        </footer>
    )
}