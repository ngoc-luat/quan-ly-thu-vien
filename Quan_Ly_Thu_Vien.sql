-- =============================================
-- HỆ THỐNG QUẢN LÝ THƯ VIỆN
-- Database: Quan_Ly_Thu_Vien
-- =============================================

CREATE DATABASE IF NOT EXISTS Quan_Ly_Thu_Vien
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE Quan_Ly_Thu_Vien;

-- ---------------------------------------------
-- Bảng: the_loai (Thể loại sách)
-- ---------------------------------------------
CREATE TABLE IF NOT EXISTS the_loai (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  ten_the_loai VARCHAR(100) NOT NULL,
  mo_ta       TEXT,
  created_at  DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at  DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- ---------------------------------------------
-- Bảng: nha_xuat_ban (Nhà xuất bản)
-- ---------------------------------------------
CREATE TABLE IF NOT EXISTS nha_xuat_ban (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  ten_nxb     VARCHAR(200) NOT NULL,
  dia_chi     VARCHAR(255),
  dien_thoai  VARCHAR(20),
  email       VARCHAR(100),
  created_at  DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at  DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- ---------------------------------------------
-- Bảng: sach (Sách) -- ĐỐI TƯỢNG CHÍNH
-- ---------------------------------------------
CREATE TABLE IF NOT EXISTS sach (
  id           INT AUTO_INCREMENT PRIMARY KEY,
  ma_sach      VARCHAR(50) NOT NULL UNIQUE,
  ten_sach     VARCHAR(300) NOT NULL,
  tac_gia      VARCHAR(200) NOT NULL,
  nam_xuat_ban INT,
  so_trang     INT,
  gia_bia      DECIMAL(10, 2),
  so_luong     INT NOT NULL DEFAULT 0,
  mo_ta        TEXT,
  hinh_anh     VARCHAR(500),
  the_loai_id  INT,
  nha_xuat_ban_id INT,
  created_at   DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at   DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_sach_the_loai     FOREIGN KEY (the_loai_id)     REFERENCES the_loai(id)     ON DELETE SET NULL,
  CONSTRAINT fk_sach_nha_xuat_ban FOREIGN KEY (nha_xuat_ban_id) REFERENCES nha_xuat_ban(id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- ---------------------------------------------
-- Bảng: doc_gia (Độc giả)
-- ---------------------------------------------
CREATE TABLE IF NOT EXISTS doc_gia (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  ma_doc_gia  VARCHAR(50) NOT NULL UNIQUE,
  ho_ten      VARCHAR(200) NOT NULL,
  email       VARCHAR(100) UNIQUE,
  dien_thoai  VARCHAR(20),
  dia_chi     VARCHAR(255),
  ngay_sinh   DATE,
  created_at  DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at  DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- ---------------------------------------------
-- Bảng: muon_sach (Mượn sách)
-- ---------------------------------------------
CREATE TABLE IF NOT EXISTS muon_sach (
  id           INT AUTO_INCREMENT PRIMARY KEY,
  doc_gia_id   INT NOT NULL,
  sach_id      INT NOT NULL,
  ngay_muon    DATE NOT NULL,
  ngay_hen_tra DATE NOT NULL,
  ngay_tra     DATE,
  trang_thai   ENUM('dang_muon','da_tra','qua_han') DEFAULT 'dang_muon',
  ghi_chu      TEXT,
  created_at   DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at   DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_muon_doc_gia FOREIGN KEY (doc_gia_id) REFERENCES doc_gia(id) ON DELETE CASCADE,
  CONSTRAINT fk_muon_sach    FOREIGN KEY (sach_id)    REFERENCES sach(id)    ON DELETE CASCADE
) ENGINE=InnoDB;

-- =============================================
-- DỮ LIỆU MẪU
-- =============================================

INSERT INTO the_loai (ten_the_loai, mo_ta) VALUES
  ('Văn học', 'Sách văn học trong và ngoài nước'),
  ('Khoa học kỹ thuật', 'Sách về công nghệ, lập trình, kỹ thuật'),
  ('Lịch sử', 'Sách lịch sử Việt Nam và thế giới'),
  ('Kinh tế', 'Sách kinh tế, quản trị, tài chính'),
  ('Thiếu nhi', 'Sách dành cho trẻ em');

INSERT INTO nha_xuat_ban (ten_nxb, dia_chi, dien_thoai, email) VALUES
  ('NXB Giáo Dục', 'Hà Nội', '024-3869-8234', 'nxbgd@edu.vn'),
  ('NXB Trẻ', 'TP. Hồ Chí Minh', '028-3930-5018', 'nxbtre@nxbtre.com.vn'),
  ('NXB Kim Đồng', 'Hà Nội', '024-3943-4730', 'kimdong@kimdong.com.vn');

INSERT INTO sach (ma_sach, ten_sach, tac_gia, nam_xuat_ban, so_trang, gia_bia, so_luong, mo_ta, the_loai_id, nha_xuat_ban_id) VALUES
  ('S001', 'Lập Trình NestJS Căn Bản', 'Nguyễn Văn A', 2023, 350, 120000.00, 10, 'Hướng dẫn lập trình NestJS từ cơ bản đến nâng cao', 2, 1),
  ('S002', 'Chiến Tranh và Hòa Bình', 'Leo Tolstoy', 2020, 1200, 250000.00, 5, 'Tác phẩm kinh điển của văn học Nga', 1, 2),
  ('S003', 'Lịch Sử Việt Nam', 'Trần Văn B', 2021, 480, 180000.00, 8, 'Lịch sử Việt Nam qua các thời kỳ', 3, 1);

INSERT INTO doc_gia (ma_doc_gia, ho_ten, email, dien_thoai, dia_chi) VALUES
  ('DG001', 'Trần Thị C', 'tranthic@email.com', '0901234567', 'Hà Nội'),
  ('DG002', 'Lê Văn D', 'levand@email.com', '0912345678', 'TP. HCM');

INSERT INTO muon_sach (doc_gia_id, sach_id, ngay_muon, ngay_hen_tra, trang_thai) VALUES
  (1, 1, '2024-01-10', '2024-01-24', 'da_tra'),
  (2, 2, '2024-02-01', '2024-02-15', 'dang_muon');
