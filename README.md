# 📚 Quản Lý Thư Viện — NestJS

Bài kiểm tra giữa kỳ môn Web Nâng Cao — Đối tượng: **Sách (Book)**

---

## 🗂️ Cấu trúc dự án

```
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
```

---

## ⚙️ Cài đặt & Chạy

```bash
# Cài dependencies
npm install

# Tạo CSDL (chạy file SQL)
mysql -u root -p < Quan_Ly_Thu_Vien.sql

# Chạy server
npm run start:dev
```

---

## 🔌 API Endpoints — Sách (Book)

| Method | URL | Chức năng |
|--------|-----|-----------|
| `POST` | `/books` | **Create** — Thêm sách mới |
| `GET` | `/books` | **Read All** — Lấy danh sách sách |
| `GET` | `/books/:id` | **Read One** — Lấy chi tiết 1 sách |
| `PATCH` | `/books/:id` | **Update** — Cập nhật thông tin sách |
| `DELETE` | `/books/:id` | **Delete** — Xóa sách |

---

## 📋 Chi tiết CRUD

### ✅ CREATE — POST `/books`

```json
// Request Body
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
```

### ✅ READ ALL — GET `/books`

```json
// Response 200
{
  "statusCode": 200,
  "message": "Lấy danh sách sách thành công",
  "data": [...books],
  "total": 3
}
```

### ✅ READ ONE — GET `/books/1`

```json
// Response 200
{
  "statusCode": 200,
  "message": "Lấy thông tin sách thành công",
  "data": { ...book }
}
```

### ✅ UPDATE — PATCH `/books/1`

```json
// Request Body (chỉ gửi field cần sửa)
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
```

### ✅ DELETE — DELETE `/books/1`

```json
// Response 200
{
  "statusCode": 200,
  "message": "Đã xóa sách \"NestJS Nâng Cao\" thành công"
}
```

---

## 🗄️ CSDL

File: `Quan_Ly_Thu_Vien.sql`

Các bảng chính:
- `sach` — Thông tin sách (đối tượng chính)
- `the_loai` — Thể loại sách
- `nha_xuat_ban` — Nhà xuất bản
- `doc_gia` — Độc giả
- `muon_sach` — Lịch sử mượn sách

---

## 📊 Activity Diagram

Xem file `Activity_Diagram_CRUD_Sach.svg` đính kèm.

---

## 👤 Thành viên

|     Thành viên   | Đối tượng phụ trách |
|------------------|---------------------|
| nguyễn ngoc luật |         Sách        |
