📚 Quản Lý Thư Viện — NestJS

Bài kiểm tra giữa kỳ môn Web Nâng Cao — Đối tượng: Sách (Sách)


🗂️Cấu trúc dự án

src/
└── books/
    ├── dto/
    │   ├── create-book.dto.ts   # Validate dữ liệu khi tạo
    │   └── update-book.dto.ts   # Validate dữ liệu khi cập nhật
    ├── entities/
    │   └── book.entity.ts       # Entity mapping bảng `sach`
    ├── books.controller.ts      # Xử lý HTTP request/response
    ├── books.service.ts         # Business logic CRUD
    └── books.module.ts          # Module đăng ký
Quan_Ly_Thu_Vien.sql             # Script tạo CSDL


⚙️ Cài đặt & Chạy

đập# Cài dependencies
npm install

# Tạo CSDL (chạy file SQL)
mysql -u root -p < Quan_Ly_Thu_Vien.sql

# Chạy server
npm run start:dev


🔌 Điểm cuối API — Sách

Phương phápURLnăng lượngPOST/booksTạo — Thêm mớiGET/booksĐọc tất cả — Lấy danh sáchGET/books/:idRead One — Lấy chi tiết 1 sáchPATCH/books/:idUpdate — Cập nhật thông tinDELETE/books/:idXóa — Xóa


📋 Chi tiết CRUD

✅ TẠO — ĐĂNG/books

json// Request Body
{
  "maSach": "S004",
  "tenSach": "NestJS Nâng Cao",
  "tacGia": "Trần Văn A",
  "namXuatBan": 2024,
  "soTrang": 400,
  "giaBia": 150000,
  "soLuong": 15,
  "moTa": "Học NestJS từ cơ bản đến nâng cao",
  "theLoaiId": 2,
  "nhaXuatBanId": 1
}

// Response 201
{
  "statusCode": 201,
  "message": "Tạo sách thành công",
  "data": { ...book }
}

✅ ĐỌC HẾT — NHẬN NGAY/books

json// Response 200
{
  "statusCode": 200,
  "message": "Lấy danh sách sách thành công",
  "data": [...books],
  "total": 3
}

✅ ĐỌC MỘT CUỐN — NHẬN NGAY/books/1

json// Response 200
{
  "statusCode": 200,
  "message": "Lấy thông tin sách thành công",
  "data": { ...book }
}

✅ CẬP NHẬT — BẢN VÁ/books/1

json// Request Body (chỉ gửi field cần sửa)
{
  "soLuong": 20,
  "giaBia": 160000
}

// Response 200
{
  "statusCode": 200,
  "message": "Cập nhật sách thành công",
  "data": { ...updatedBook }
}

✅ XÓA — XÓA/books/1

json// Response 200
{
  "statusCode": 200,
  "message": "Đã xóa sách \"NestJS Nâng Cao\" thành công"
}


🗄️ CSDL

Tài liệu:Quan_Ly_Thu_Vien.sql

Các bảng chính:


sach— Thông tin (chính đối tượng)
the_loai— Thể loại
nha_xuat_ban— sự phát triển
doc_gia— trái đất
muon_sach— Lịch sử và sách



📊 Sơ đồ hoạt động

Xem tệp Activity_Diagram_CRUD_Sach.svgđính kèm.


👤 Thành viên

nguyễn ngọc luât - 24102826
