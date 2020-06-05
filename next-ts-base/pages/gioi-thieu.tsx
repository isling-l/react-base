import React from 'react';
import Layout from '../components/Layout';
import Blog from '../components/Blog';

const title = 'Giới thiệu';
const content = `
![Gioi thieu](/images/gioi-thieu/01.jpg)

Xuất phát từ nhu cầu chuyển phát ngày càng tăng trong 
cùng xu thế phát triển của thương mại điện tử - 
Chuyển phát Doraemon tin tưởng mang lại nhiều giá trị 
tới khách hàng và xã hội.

Với phương châm **Nhanh - Linh hoạt - Thân 
thiện**, Chuyển phát Doraemon luôn cố gắng mang lại sự 
tin tưởng trong lòng khách hàng, chủ cửa hàng - những 
người sử dụng dịch vụ bởi những cố gắng trong việc tối 
ưu thời gian chuyển phát, phù hợp phí ship qua thời gian.

## CAM KẾT:

> **GIAO HÀNG** nhiều lựa chọn (30’, 3h-6h nội thành) và
  trong ngày chỉ từ 15K/đơn với các tuyến liên tỉnh và
  nhiều lựa chọn khác.

> **CHĂM SÓC XỬ LÝ** từng đơn hàng cho Shop.

Bên cạnh đó, Chuyển phát Doraemon sở hữu đội ngũ NVGH
chuyên nghiệp - thân thiện, nhiệt huyết.

## TẦM NHÌN:

> Trở thành doanh nghiệp số 1 cung cấp dịch vụ chuyển phát
nhanh uy tín, chất lượng tốt nhất.

> Là doanh nghiệp áp dụng CNTT nhằm tối ưu hóa việc vận hành
và đáp ứng yêu cầu khắt khe trong thời đại thương mại điện
tử đang là xu hướng tất yếu.

**Chuyển phát Doraemon rất vui được phục vụ các bạn!**
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
