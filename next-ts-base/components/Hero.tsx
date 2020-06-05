import * as React from 'react';
import Link from 'next/link';

const Hero: React.FunctionComponent = () => (
  <div className='w-6/12 text-white'>
    <div className='why-doraemon'>
      Dịch vụ chuyển phát nhanh uy tín, chất lượng tốt nhất
    </div>
    <div className='text-3xl pt-4'>
      Sở hữu đội ngũ nhân viên giao hàng chuyên nghiệp - thân thiện, Chuyển phát
      Doraemon cam kết mang lại nhiều giá trị tới khách hàng
    </div>
    <div className='pt-16'>
      <Link href='/gioi-thieu'>
        <button className='btn btn-rounded btn-normal bg-white text-blue-600 text-lg font-black'>
          Tìm hiểu thêm
        </button>
      </Link>
    </div>
  </div>
);

export default Hero;
