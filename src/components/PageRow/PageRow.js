import { PageLink } from '../PageLink/PageLink';
import style from './PageRow.module.css';
import Image from 'next/image'


export function PageRow({ rowColumns, header, subheader, bodyCopy, id }) {


    return (
        <section className={style.sectionContainer} id={style[`${id}`]}>
            <div className={style.rowWrapper}>
                {!header || !subheader || !bodyCopy && (
                    <div className={style.headerWrapper}>
                        <h1>{header}</h1>
                        <h2>{subheader}</h2>
                        <p>{bodyCopy}</p>
                    </div>
                )}
                <div className={style.pageRowGridWrapper}>
                    {rowColumns.map(rowColumn => {
                        return (
                            <div key={1} className={`${style.columnWrapper} col-1`} style={{ backgroundImage: `url(${rowColumn.bgImage})`, backgroundSize: 'cover' }}>
                                <div className={style.textWrapper}>
                                    <h1>{rowColumn.header}</h1>
                                    <h2>{rowColumn.subHeader}</h2>
                                    <p>{rowColumn.bodyCopy}</p>
                                </div>
                                {rowColumn.imgSrc && (
                                    <div className={style.imageWrapper}>
                                        <Image alt='' src={rowColumn.imgSrc} height={100} width={100} />
                                    </div>
                                )}

                                {rowColumn.ctas && (
                                    <div className={style.ctaWrapper}>
                                        {rowColumn.ctas.map(cta => (
                                            <PageLink key={2} label={cta.label} path={cta.path} className={cta.btnClass} />
                                        ))}

                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}