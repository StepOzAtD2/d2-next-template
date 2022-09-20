import Head from 'next/head'
import dynamic from 'next/dynamic'

import {
  TITLE,
  DESCRIPTION
} from '@constants/d2-meta-head'

const Header = dynamic(
  () => import('@components/d2-header'),
  { ssr: false }
)

const Footer = dynamic(
  () => import('@components/d2-footer'),
  { ssr: false }
)


const DefaultLayout = props => {  
  return (
    <>
       <Head>
        <title>{ TITLE }</title>

        <meta 
          name="description" 
          content={ DESCRIPTION }
        />

        {/* mobile specific metas */}
        <meta 
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      
      <div 
        id="d2-default-layout"
        className="d2-page-wrapper"
      >
          
          <Header />
          
          { props.children }

          <Footer />

      </div>

    </>
  );
}

export default DefaultLayout;
