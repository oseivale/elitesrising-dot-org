import Link from 'next/link'
import style from './PageWrapper.module.css'
import { arimo, candal, nunito_sans, raleway, titillium_web } from '@/fonts/fonts'
import { Truculenta } from 'next/font/google'
import Image from 'next/image'

export function PageWrapper({ pageHeader, children, pageHeaderImg }) {
    return (
        <div className={style.pageContainer}>
            <section className={style.pageHeader}>
                <div className={`${candal.className} ${style.headerWrapper}`}><h1>{pageHeader}</h1></div>
                <div style={{ backgroundImage: `url(${pageHeaderImg})` }} className={style.imageWrapper}></div>
                <div className={style.mobileHeaderImgWrapper}>
                    <Image className={style.mobileHeaderImg} alt='' src={pageHeaderImg} height={200} width={200} />
                </div>


            </section>
            <div className={style.contentWrapper}>
                <aside className={`${style.sideBar}`}>
                    <div>
                        <h1 className={nunito_sans.className}>Address</h1>
                        <p>4 Disan Court, Toronto ON</p>
                    </div>
                    {/* <Link className={style.quickLink} href='#'>Blog</Link> */}

                    <div>
                        <h1 className={nunito_sans.className}>Contact Info</h1>
                        <p>elitesrising@gmail.com</p>

                        <p>(123) 456-7890</p>
                    </div>
                </aside>
                <div className={style.content}>
                    {children}
                </div>
            </div>
        </div>

    )
}