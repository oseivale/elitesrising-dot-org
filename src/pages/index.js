import Image from 'next/image'
import { Inter, Raleway } from 'next/font/google'
import { PageLink } from '@/components/PageLink/PageLink';
import { MainNav } from '@/components/MainNav/MainNav';
import { Footer } from '@/components/Footer/Footer';
import { PageRow } from '@/components/PageRow/PageRow';

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

const columns = [
  {
    // header: 'header 1',
    // subHeader: 'subheader 1',
    // bodyCopy: 'body copy 1',
    // imgSrc: 'https://cc-prod.scene7.com/is/image/CCProdAuthor/What-is-Stock-Photography_P1_mobile?$pjpeg$&jpegSize=200&wid=720',
    ctas: [
      {
        label: 'DONATE NOW!',
        path: 'path1',
        btnClass: 'btn-outlined'
      },
      {
        label: 'JOIN EVENT',
        path: 'path2',
        btnClass: 'btn-primary'
      },
    ]
  },
  // {
  //   header: 'header 1',
  //   subHeader: 'subheader 1',
  //   bodyCopy: 'body copy 1',
  //   imgSrc: '',
  //   ctas: []
  // }
]
import { arimo, nunito_sans, shantell_sans, grupo, staatliches } from '../fonts/fonts'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <main
        className={nunito_sans.className}
    >
        <MainNav navLinks={[{ label: 'Home', path: '#' }, { label: 'About', path: '#' }, { label: 'Events', path: '#' }]} />
        <PageLink className={'btn-primary'} path='#' label={'Test'} />
        <PageLink className={'btn-link'} path='#' label={'Test'} />
        <PageRow rowColumns={columns} header={'THE BEST TIME TO PLANT TREE IS NOW'} subheader={'Some Lorem Ipsum Subtitle Will Be Here Ipsum Dolor'} />
    </main>
      <Footer footerLinks={footerLinks} />
    </>
  )
}
