import Image from 'next/image'
import { Inter, Raleway } from 'next/font/google'
import { PageLink } from '@/components/PageLink/PageLink';
import { MainNav } from '@/components/MainNav/MainNav';
import { Footer } from '@/components/Footer/Footer';
import { PageRow } from '@/components/PageRow/PageRow';
import { PrimaryCard } from '@/components/Cards/Primary/PrimaryCard'

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

const twoColumns = [
  {
    header: 'JOIN OUR EVENT & HELP US BY DONATION',
    subHeader: 'Lorem Ipsum Dolor Highlight Sit Amet, Cum At Inani Interesset',
    bodyCopy: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',

    ctas: [
      {
        label: 'DONATE NOW!',
        path: 'path1',
        btnClass: 'btn-outlined'
      },
      {
        label: 'VIEW DETAILS',
        path: 'path2',
        btnClass: 'btn-primary'
      },
    ]
  },
  {

    bgImage: 'https://hips.hearstapps.com/hmg-prod/images/beautiful-sunrise-dolomites-belluno-provence-italy-1492545669.jpg',

  },
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
import { HeroBanner } from '@/components/HeroBanner/HeroBanner';
import { Layout } from '@/components/Layout/Layout';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout>

        <main
        className={nunito_sans.className}
    >
        {/* <MainNav navLinks={[{ label: 'Home', path: '#' }, { label: 'About', path: '#' }, { label: 'Events', path: '#' }]} /> */}
        <HeroBanner />
        <PageRow rowColumns={columns} header={'THE BEST TIME TO PLANT TREE IS NOW'} subheader={'Some Lorem Ipsum Subtitle Will Be Here Ipsum Dolor'} id='oneColumn' />
        <PageRow rowColumns={twoColumns} id='twoColumn' />
        <PageRow rowColumns={columns} header={'THE BEST TIME TO PLANT TREE IS NOW'} subheader={'Some Lorem Ipsum Subtitle Will Be Here Ipsum Dolor'} id='oneColumn' />
        <PrimaryCard cardImageSrc={'https://cc-prod.scene7.com/is/image/CCProdAuthor/What-is-Stock-Photography_P1_mobile?$pjpeg$&jpegSize=200&wid=720'} cardImageAltText={'alt text'} cardCtaPath={'#'} cardLabel='Learn more' cardHeader={'card header'} cardSubheader={'subheader'} cardBodyCopy={'Text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text...'} />
    </main>
      </Layout>

      {/* <Footer footerLinks={footerLinks} /> */}
    </>
  )
}
