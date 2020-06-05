import React from 'react';
import Layout from '../components/Layout';
import Blog from '../components/Blog';

const title = 'SỨ MỆNH DOANH NGHIỆP';
const content = `
# Mục tiêu

1. **Khách hàng:** ai là người tiêu thụ các sản phẩm, dịch vụ của công ty?

  - Các Doanh nghiệp, chủ shop online, cá nhân có nhu cầu giao hàng nhanh - tối ưu

2. **Sản phẩm hay dịch vụ cốt lõi:**

  - Tập trung và kết nối giao hàng nhanh, hỏa tốc nội thành, liên tỉnh đặc biệt
  - Mạng lưới kho thương mại điện tử theo từng giai đoạn
  - Tập trung vào phân khúc hàng hóa nhỏ, nhẹ hơn 2kg hoặc kích thước nhỏ hơn 20cmx20cm

3. **Thị trường:**

  - Tập trung cung cấp giải pháp tối ưu giao hàng thị trường nội thành các thành phố lớn
  - Khác biệt: **MỌI LÚC KHÁCH CẦN, DORAEMON CÓ.**

4. **Công nghệ:**

  - Áp dụng công nghệ hiện đại vào hoạt động kinh doanh
  - Liên tục cập nhật các công nghệ tiện ích trải nghiệm tới khách hàng

5. **Triết lý:** 5 sao

  - Nhanh
  - Linh hoạt
  - Thân thiện
  - Chuyên nghiệp
  - Rộng khắp

6. **Lợi thế cạnh tranh của Doraemon với các đơn vị giao hàng khác**

  - Nhận hàng nhanh, đúng giờ
  - Giao hàng nhanh, linh hoạt
  - Dịch vụ đa dạng

7. **Mối quan tâm đối với hình ảnh cộng đồng**: hình ảnh cộng đồng có là mối quan tâm chủ yếu đối với công ty hay không?
  - Mang tới hình ảnh thân thiện

8. **Mối quan tâm đối với nhân viên**: thái độ của công ty với nhân viên như thế nào?
  - Khách hàng là trọng tâm
  - Nhân viên là nòng cốt

**Doraemon luôn tôn trọng tới từng thành viên trong tập thể, luôn lắng nghe,
thấu hiểu để mỗi thành viên trong tổ chức đều là 1 hạt giống ươm mầm thành công của Doraemon.**
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
