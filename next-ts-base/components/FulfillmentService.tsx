import * as React from 'react';
import Link from 'next/link';

const FulfillmentService: React.FunctionComponent = () => (
  <div className='flex justify-between items-center'>
    <div className='w-6/12 pr-32'>
      <div className='font-semibold text-gray-800 text-4xl'>
        Dịch vụ kho thương mại điện tử - website bán hàng online
      </div>
      <div className='mt-4'>
        <p className='text-lg text-gray-600'>
          Với tốc độ phát triển về mua sắm trực tuyến đã thách thức việc lưu trữ
          hàng hóa với các doanh nghiệp hoạt động trong lĩnh vực thương mại điện
          tử.
        </p>
        <p className='text-lg text-gray-600 mt'>
          Để giải quyết vấn đề khó khăn này, Chuyển phát Doraemon chính thức đưa
          vào hoạt động dịch vụ cho thuê kho cho website thương mại điện tử –
          website bán hàng online với chất lượng cao và lần đầu tiên có mặt tại
          Việt Nam.
        </p>
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
    <div className='w-6/12'>
      <img
        src='/images/home/fulfillment.jpg'
        alt=''
        className='w-full object-scale-down'
      />
    </div>
  </div>
);

export default FulfillmentService;
