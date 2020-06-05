import * as React from 'react';

const customers = [
  {
    img: '/images/customer/tiki.png'
  },
  {
    img: '/images/customer/shopee.png'
  },
  {
    img: '/images/customer/indiana-color.png'
  },
  {
    img: '/images/customer/liberty-color.png'
  },
  {
    img: '/images/customer/visa-color.png'
  }
];

const Customer: React.FunctionComponent = () => (
  <div className='flex justify-between items-center'>
    {customers.map((c, index) => (
      <div className='w-48 flex justify-center' key={index}>
        <img src={c.img} alt='' className='object-scale-down' />
      </div>
    ))}
  </div>
);

export default Customer;
