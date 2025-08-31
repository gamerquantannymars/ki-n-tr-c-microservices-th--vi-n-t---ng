# Kiến Trúc Microservices Thư Viện Tự Động

## Giới thiệu
Dự án này là một ví dụ về cách xây dựng hệ thống thư viện sử dụng kiến trúc microservices. Mỗi microservice sẽ đảm nhận một chức năng riêng biệt, bao gồm quản lý sách, quản lý độc giả và chức năng cho mượn sách.

## Cấu trúc hệ thống
- **Service Sách**: Quản lý thông tin sách.
- **Service Độc Giả**: Quản lý thông tin độc giả.
- **Service Cho Mượn**: Xử lý các yêu cầu cho mượn và trả sách.

## Công nghệ sử dụng
- Node.js
- MongoDB
- Docker

## Hướng dẫn cài đặt
1. Clone repository này.
2. Chạy lệnh `docker-compose up` để khởi động các microservices.
3. Truy cập vào địa chỉ `http://localhost:3000` để kiểm tra.

## Góp phần phát triển
Nếu bạn muốn tham gia vào dự án hoặc có đề xuất cải tiến, hãy mở một issue hoặc gửi pull request.

## Tài liệu tham khảo
- [Microservices - Martin Fowler](https://martinfowler.com/articles/microservices.html)

Cảm ơn bạn đã xem qua dự án!