import React from 'react';
import Layout from '../components/Layout';
import Blog from '../components/Blog';

const title = 'CAM KẾT TỚI KHÁCH HÀNG';
const content = `
![Cam ket](/images/cam-ket/01.jpg)

**CPN Doraemon** là dịch vụ giao hàng nhanh có thu hộ đảm bảo an toàn,
nhanh chóng, với chi phí tiết kiệm và đội ngũ nhân viên chuyên nghiệp.
CPN Doraemon xây dựng để mang đến cho bạn những dịch vụ với cam kết:

1. Lấy hàng và giao hàng **đúng thời gian** quy định.

  - Lấy hàng: Trong 30p
  - Giao hàng, xử lý đơn:
    - Nội thành: 4-6H.
    - Liên tuyến đặc biệt: 24H.
    - Liên tỉnh: 2-5 ngày.

2. **Giá cước** cạnh tranh, **chiết khấu** ưu đãi cao.
3. **Miễn phí thu hộ** nội thành, **miễn phí** bảo hiểm đến **3 triệu đồng**.
4. Giao hàng thu hộ **COD** trên **63 Tỉnh thành**.
5. Thông báo xác nhận lấy hàng bằng **Apps**, phản hồi đơn hàng nhanh
chóng trên **web, app, Group làm việc chung...**
6. CSKH trực 24/24.
7. Truy vấn, tạo vận đơn nhanh chóng, định vị bưu gửi theo thời gian thực **GPS**.
8. **Thanh toán** công nợ 3 ngày trong tuần (Hoặc theo thỏa thuận riêng
từng Shop). Gửi mail thông báo đối soát công nợ, Cam kết thanh toán đúng hẹn.
9. **Miễn phí giao lại 3 lần.**
10. Gọi điện, nhắn tin cho người nhận trước khi giao hàng.
11. Thông báo và cập nhật trạng thái đơn, gọi điện cho người gửi khi có **vấn
đề phát sinh** với người nhận . VD hủy đơn, đổi hàng...
12. **Miễn phí thay đổi** số tiền thu hộ COD, địa chỉ, SĐT người nhận.
13. **Khách lấy 1 phần** đối với các khách không lấy toàn bộ.
14. **Miễn phí đồng kiểm.**
15. **Bồi thường** trong trường hợp đơn vị giao hàng làm hư hỏng, mất hàng của quý khách.

  - Quý khách không sử dụng dịch vụ bảo hiểm hàng hóa thì mức bồi thường thiệt hại là 4 lần giá trị phí gửi đơn hàng nhưng không quá 3,000,000đ.
  - Nếu như khi gửi hàng quý khách có sử dụng dịch vụ bảo hiểm của CPN Doraemon thì CPN Doraemon sẽ bồi thường:
    + Nếu mất mát sản phẩm tối đa 100% giá trị đơn hàng khai báo ban đầu khi quý khách gửi hàng.
    + Nếu sản phẩm bị hư hỏng = phần trăm hư hỏng (CPN Doraemon và khách hàng thỏa thuận)* 100% giá trị khai báo ban đầu.

16. Thời gian làm việc **cả tuần.**

  - Từ T2 – T7: 7h30 – 20h.
  - Chủ Nhật: 8h – 16h.
  - Ngoài khoảng thời gian trên sẽ xử lý như đơn hỏa tốc, cước phí trung bình 30K/đơn.

Chủ Nhật CPN Doraemon chỉ hỗ trợ các quận nội thành: lấy hàng các shop, nhận hàng đi tỉnh, giao những đơn khi có thể, xử lý như đơn lẻ nếu phát sinh bất thường, nhằm đảm bảo xử lý đơn triệt để cho Shop.

  - Các Shop có đơn gấp cần nhận, giao trong ngày thì vui lòng liên hệ fanpage hoặc chuyển hình thức giao hàng trên App. Chuyển phát Doraemon sẽ có trách nhiệm xử lý theo yêu cầu của quý shop.

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
