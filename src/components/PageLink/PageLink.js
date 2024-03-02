import Link from "next/link"
import styles from './PageLink.module.css'

export function PageLink({ path, label, className }) {

    return (
        <Link className={className} href={path}>{label}</Link>
    )
}