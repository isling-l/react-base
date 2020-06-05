import * as React from 'react';
import Link from 'next/link';

const groupServices = [
  {
    groupName: 'Giao hàng nội thành',
    services: [
      {
        title: 'Giao hàng trong 2h đến 6h',
        bgColor: 'bg-red-600'
      },
      {
        title: 'Giao hàng trong ngày',
        bgColor: 'bg-orange-600'
      },
      {
        title: 'Dịch vụ kết nối Doraemon Go',
        bgColor: 'bg-blue-700'
      }
    ]
  },
  {
    groupName: 'Giao hàng liên tỉnh',
    services: [
      {
        title: 'Giao hàng trong ngày',
        bgColor: 'bg-orange-600'
      },
      {
        title: 'Giao hàng nhanh',
        bgColor: 'bg-blue-700'
      },
      {
        title: 'Giao hàng tiết kiệm',
        bgColor: 'bg-green-600'
      }
    ]
  },
  {
    groupName: 'Giao hàng toàn quốc',
    services: [
      {
        title: 'Giao hàng nhanh',
        bgColor: 'bg-blue-700'
      },
      {
        title: 'Giao hàng tiết kiệm',
        bgColor: 'bg-green-600'
      }
    ]
  }
];

const ShipService: React.FunctionComponent = () => (
  <div className='flex justify-between items-center'>
    <div className='w-6/12'>
      <img
        src='/images/home/sample.jpg'
        alt=''
        className='w-full object-scale-down'
      />
    </div>
    <div className='w-6/12 pl-32'>
      <div className='font-semibold text-gray-800 text-4xl'>
        Dịch vụ giao hàng
      </div>
      <div className='mt-4'>
        {groupServices.map((gs, index) => (
          <div className='mb-3' key={index}>
            <div className='text-gray-800 font-semibold text-xl'>
              {gs.groupName}
            </div>
            <div className='font-semibold clearfix'>
              {gs.services.map((s, index) => (
                <div key={index} className='w-4/12 float-left'>
                  <div className='mx-2'>
                    <div className={`rounded ${s.bgColor} h-16 text-gray-200`}>
                      <div className='p-2 flex justify-center items-center'>
                        <div className='text-center'>{s.title}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className='mt-8'>
        <Link href='#'>
          <div className='flex items-center text-blue-600 text-lg font-semibold cursor-pointer'>
            <i className='material-icons'>trending_flat</i>
            <p className='pl-2'>Tìm hiểu thêm</p>
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default ShipService;
