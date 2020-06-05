import React from 'react';
import Layout from '../components/Layout';
import Blog from '../components/Blog';

const title = 'TẠI SAO CHỌN CHUYỂN PHÁT DOREAMON';
const content = `
![Tai sao chon chuyen phat Doraemon](/images/vi-sao-chon-doraemon/01.jpg)

## Nhanh

  - Thời gian giao hàng nhanh (30’,2-6H,24H…)
  - Cập nhật trạng thái giao hàng liên tục realtime
  - Thời gian trả công nợ nhanh và chính xác.
  - Tương tác với người nhận trước.

## Linh hoạt

  - Cho phép KH lấy 1 phần, thay đổi COD
  - Nhiều gói cước (hỏa tốc, nhanh, tiết kiệm) để KH lựa chọn
  - Miễn phí giao lại
  - Miễn phí lưu kho
  - Thanh toán linh hoạt

## Thân thiện

  - 100% nhân viên đều có đều có đạo đức nghề tốt
  - Website và Apps dễ dàng sử dụng, thân thiện người dùng

## Tối ưu hóa

  - Tối ưu chi phí (Giá cước cạnh tranh, xử lý linh hoạt)
  - Tối ưu thời gian giao hàng (Đơn hàng sẽ tới tay KH nhanh nhất với giá phí phù hợp nhất)
  - Tối ưu về hệ thống (Liên tục thay đổi, nâng cấp để phù hợp với nhu cầu của khách hàng)
  - Tối ưu về nhân sự (Qui trình hóa dựa trên nền tảng CNTT…)

## Đa dạng

  - Đa dạng dịch vụ (hướng tâm vào khách hàng, tập trung dịch vụ hỗ trợ giao hàng)
  - Đa dạng bản sắc (mỗi cá nhân sẽ là chủ công việc của mình, được tự do đóng góp ý kiến)
`;
const publishedAt = 'Ngày 4 tháng 11 năm 2019';

const GioiThieu: React.FunctionComponent = () => (
  <Layout
    header={{
      color: 'text-blue-600',
      buttonBorder: 'border-blue-600',
      logoWhite: false
    }}
  >
    <div className='homepage-main-gray bg-gray-100'>
      <div className='container mx-auto py-40 px-40'>
        <div className='p-8'>
          <Blog title={title} content={content} publishedAt={publishedAt} />
        </div>
      </div>
    </div>
  </Layout>
);

export default GioiThieu;
