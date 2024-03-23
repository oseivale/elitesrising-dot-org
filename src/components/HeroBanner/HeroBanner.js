import Image from "next/image";
import style from './HeroBanner.module.css';
import { candal } from "@/fonts/fonts";

export function HeroBanner() {

    return (
        <section className={style.heroContainer}>
            <div className={style.heroImgWrapper}>
                <Image className={style.heroImg} alt='atl' src='/siviwe-kapteyn-tCvDVszXdHE-unsplash.jpg' width={1000} height={1000} />
            </div>
            <div className={`${style.textWrapper}`}>
                <h1 className={candal.className}>This is <span className={style.coloredTitle}>a Title</span></h1>
                <h2>Subtitle</h2>
                <p>test body copy</p>
            </div>

        </section>
    )
}