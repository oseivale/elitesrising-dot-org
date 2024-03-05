import Image from "next/image";
import { PageLink } from "@/components/PageLink/PageLink";
import style from './PrimaryCard.module.css'

export function PrimaryCard({ cardImageSrc, cardImageAltText, cardCtaPath, cardLabel, cardHeader, cardSubheader, cardBodyCopy }) {


    return (
        <div className={style.cardContainer}>
            <div className={style.cardContentWrapper}>
                {cardImageSrc && (
                    <div className={style.imageWrapper}>
                        <Image src={cardImageSrc} width={330} height={100} alt={cardImageAltText} />
                    </div>
                )}
                <div className={style.textWrapper}>
                    {cardHeader && <h1>{cardHeader}</h1>}
                    {cardSubheader && <h2>{cardSubheader}</h2>}
                    {cardBodyCopy && <p>{cardBodyCopy}</p>}
                </div>
                <div className={style.ctaWrapper}>
                    <PageLink className={'btn-primary'} path={cardCtaPath} label={cardLabel} />
                </div>
            </div>
        </div>

    )
}