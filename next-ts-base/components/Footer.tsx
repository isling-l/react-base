import * as React from 'react';
import Link from 'next/link';

const Footer: React.FunctionComponent = () => (
  <footer>
    <div className='container mx-auto'>
      <div className='clearfix'>
        <div className='w-2/12 float-left'>
          <img
            src='/brand-square.png'
            alt=''
            className='object-scale-down w-40'
          />
        </div>
        <div className='w-2/12 float-left'>
          <div className='text-gray-300 font-semibold'>Thông tin</div>
          <div>
            <div className='text-gray-500 pt-4'>
              <Link href='/gioi-thieu'>
                <div className='py cursor-pointer hover:text-gray-300'>
                  Giới thiệu
                </div>
              </Link>
              <Link href='/su-menh'>
                <div className='py cursor-pointer hover:text-gray-300'>
                  Sứ mệnh
                </div>
              </Link>
              <Link href='/vi-sao-chon-doraemon'>
                <div className='py cursor-pointer hover:text-gray-300'>
                  Vì sao chọn Doraemon
                </div>
              </Link>
              <Link href='/cam-ket'>
                <div className='py cursor-pointer hover:text-gray-300'>
                  Cam kết của Doraemon
                </div>
              </Link>
              <Link href='/quy-dinh-gui-hang'>
                <div className='py cursor-pointer hover:text-gray-300'>
                  Quy định gửi hàng
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className='w-2/12 float-left'>
          <div className='text-gray-300 font-semibold'>Dịch vụ</div>
          <div className='pt-4'>
            <div className='text-gray-400 font-semibold'>Giao hàng</div>
            <div className='text-gray-500 pt-4'>
              <div className='py'>Giao hàng nội thành</div>
              <div className='py'>Giao hàng liên tỉnh</div>
              <div className='py'>Giao hàng toàn quốc</div>
            </div>
          </div>
          <div className='pt-4'>
            <div className='text-gray-400 font-semibold'>
              Kho thương mại điện tử
            </div>
            <div className='text-gray-500 pt-4'>
              <div className='py'>Dịch vụ kho</div>
              <div className='py'>Bảng giá</div>
            </div>
          </div>
        </div>
        <div className='w-2/12 float-left'>
          <div className='text-gray-300 font-semibold'>Tuyển dụng</div>
          <div>
            <div className='text-gray-500 pt-4'>
              <div className='py'>Nhân viên</div>
              <div className='py'>CTV bán hàng tại nhà</div>
            </div>
          </div>
        </div>
        <div className='w-2/12 float-left'>
          <div className='text-gray-300 font-semibold'>Liên hệ</div>
          <div>
            <div className='text-gray-500 pt-4'>
              <div className='py'>
                42 ngõ 157 Pháo Đài Láng, Q. Đống Đa, Hà Nội
              </div>
              <div className='py'>0969839911</div>
              <div className='py'>cpdoraemon@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-gray-500 text-lg pt-24'>
        © 2019 Chuyển phát Doraemon. Mọi quyền được bảo lưu
      </div>
    </div>
  </footer>
);

export default Footer;
