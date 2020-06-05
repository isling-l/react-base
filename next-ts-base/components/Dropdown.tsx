import { FunctionComponent, ReactChild } from 'react';

type Props = {
  children: ReactChild;
};

const Dropdown: FunctionComponent<Props> = ({ children }) => (
  <div className='h-full w-full relative'>
    {children}
    <div className='absolute rounded bg-white mt-4'>
      <div className='relative'>
        <div className='arrow absolute'></div>
      </div>
      <div className='p-12 text-gray-900 text-xl leading-normal'>
        <div className='py-2'>Thời gian giao hàng nhanh (30’,2-6H,24H…)</div>
        <div className='py-2'>
          Cập nhật trạng thái giao hàng liên tục realtime
        </div>
        <div className='py-2'>Thời gian trả công nợ nhanh và chính xác</div>
        <div className='py-2'>Tương tác với người nhận trước</div>
      </div>
    </div>
  </div>
);

export default Dropdown;
