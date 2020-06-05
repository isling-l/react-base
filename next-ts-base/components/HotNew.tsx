import * as React from 'react';
import Link from 'next/link';

const HotNew: React.FunctionComponent = () => (
  <div className='text-white rounded bg-white'>
    <Link href='#'>
      <div className='p-12 cursor-pointer clearfix'>
        <div className='float-left w-3/12 w-64 h-40 bg-gray-400'></div>
        <div className='float-left w-9/12'>
          <div className='pl-24'>
            <Link href='/tuyen-dung'>
              <div className='text-sm text-blue-500 uppercase font-semibold cursor-pointer'>
                Tuyển dụng
              </div>
            </Link>
            <div className='text-xl text-gray-800 font-semibold pt-2'>
              Tuyển dụng Nhân viên kinh doanh
            </div>
            <div className='text-lg text-gray-600 pt-2'>
              Doraemon tuyển 02 nhân viên kinh doanh làm việc tại Hà Nội
            </div>
          </div>
        </div>
      </div>
    </Link>
  </div>
);

export default HotNew;
