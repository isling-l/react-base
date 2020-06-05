import * as React from 'react';
import Link from 'next/link';

const TheDifference: React.FunctionComponent = () => (
  <div>
    <div className='text-4xl font-semibold text-gray-800 text-center'>
      Sự khác biệt của chúng tôi
    </div>
    <div className='pt-4 text-3xl text-gray-600 text-center w-10/12 mx-auto'>
      Chuyển phát Doraemon luôn cố gắng mang lại sự tin tưởng trong lòng những
      người sử dụng dịch vụ bằng việc tối ưu thời gian chuyển phát, phù hợp phí
      ship qua thời gian.
    </div>
    <div className='flex justify-between pt-20'>
      <div className='w-4/12 h-48 pr-8'>
        <div className='flex justify-center items-center h-full bg-blue-700 rounded relative overflow-hidden'>
          <i className='material-icons text-4xl text-white mr-2'>
            local_shipping
          </i>
          <div className='text-3xl text-white font-bold uppercase'>Nhanh</div>
          <div className='absolute bottom-0 right-0 card-peel'></div>
        </div>
      </div>
      <div className='w-4/12 h-48 px-4'>
        <div className='flex justify-center items-center h-full bg-orange-600 rounded relative overflow-hidden'>
          <i className='material-icons text-4xl text-white mr-2'>
            accessibility_new
          </i>
          <div className='text-3xl text-white font-bold uppercase'>
            Linh hoạt
          </div>
          <div className='absolute bottom-0 right-0 card-peel'></div>
        </div>
      </div>
      <div className='w-4/12 h-48 pl-8'>
        <div className='flex justify-center items-center h-full bg-green-600 rounded relative overflow-hidden'>
          <i className='material-icons text-4xl text-white mr-2'>
            sentiment_very_satisfied
          </i>
          <div className='text-3xl text-white font-bold uppercase'>
            Thân thiện
          </div>
          <div className='absolute bottom-0 right-0 card-peel'></div>
        </div>
      </div>
    </div>
    <div className='pt-20 text-center'>
      <Link href='/vi-sao-chon-doraemon'>
        <button className='btn btn-rounded btn-normal bg-blue-600 text-lg font-semibold text-white'>
          Vì sao chọn Doraemon?
        </button>
      </Link>
    </div>
  </div>
);

export default TheDifference;
