// src/books/entities/book.entity.ts
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('sach')
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'ma_sach', unique: true, length: 50 })
  maSach: string;

  @Column({ name: 'ten_sach', length: 300 })
  tenSach: string;

  @Column({ name: 'tac_gia', length: 200 })
  tacGia: string;

  @Column({ name: 'nam_xuat_ban', nullable: true })
  namXuatBan: number;

  @Column({ name: 'so_trang', nullable: true })
  soTrang: number;

  @Column({ name: 'gia_bia', type: 'decimal', precision: 10, scale: 2, nullable: true })
  giaBia: number;

  @Column({ name: 'so_luong', default: 0 })
  soLuong: number;

  @Column({ name: 'mo_ta', type: 'text', nullable: true })
  moTa: string;

  @Column({ name: 'hinh_anh', length: 500, nullable: true })
  hinhAnh: string;

  @Column({ name: 'the_loai_id', nullable: true })
  theLoaiId: number;

  @Column({ name: 'nha_xuat_ban_id', nullable: true })
  nhaXuatBanId: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
