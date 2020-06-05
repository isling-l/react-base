import * as React from 'react';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

type HeaderConfig = {
  color: string;
  buttonBorder: string;
  logoWhite: boolean;
};

type Props = {
  title?: string;
  description?: string;
  url?: string;
  header?: HeaderConfig;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'Chuyển phát Doraemon',
  description = 'Chuyển phát Doraemon, dịch vụ chuyển phát nhanh uy tín, chất lượng tốt nhất',
  url = 'http://cpndoraemon.com',
  header = {
    color: 'text-white',
    buttonBorder: 'border-white',
    logoWhite: true
  }
}) => (
  <div>
    <Head>
      <link href='/logo.png' rel='shortcut icon' type='image/png' />
      <link
        href='https://fonts.googleapis.com/icon?family=Material+Icons'
        rel='stylesheet'
      />
    </Head>
    <Header {...header} />
    {children}
    <Footer />
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        type: 'website',
        url,
        title,
        description,
        images: [
          {
            url: 'http://cpndoraemon.com/logo.png',
            width: 400,
            height: 400,
            alt: 'Chuyển phát nhanh Doraemon'
          }
        ]
      }}
    />
  </div>
);

export default Layout;
