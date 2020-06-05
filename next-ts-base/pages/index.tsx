import * as React from 'react';
import { NextPage } from 'next';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import HotNew from '../components/HotNew';
import TheDifference from '../components/TheDifference';
import ShipService from '../components/ShipService';
import FulfillmentService from '../components/FulfillmentService';
import Customer from '../components/Customer';

const IndexPage: NextPage = () => {
  return (
    <Layout title='Chuyển phát Doraemon'>
      <main className='homepage-main'>
        <section className='container mx-auto pt-40'>
          <Hero />
        </section>
        <section className='container mx-auto pt-40'>
          <div className='w-10/12 mx-auto'>
            <HotNew />
          </div>
        </section>
        <section className='container mx-auto pt-40'>
          <div className='w-10/12 mx-auto'>
            <TheDifference />
          </div>
        </section>
        <section className='container mx-auto pt-40'>
          <div className='-ml-48 w-full'>
            <ShipService />
          </div>
        </section>
        <section className='container mx-auto pt-40'>
          <div className='ml-48 w-full'>
            <FulfillmentService />
          </div>
        </section>
        <section className='container mx-auto pt-64 pb-8'>
          <Customer />
        </section>
      </main>
    </Layout>
  );
};

export default IndexPage;
