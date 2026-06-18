// src/books/dto/create-book.dto.ts
import { IsString, IsNotEmpty, IsOptional, IsNumber, IsPositive, Min } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty({ message: 'Mã sách không được để trống' })
  maSach: string;

  @IsString()
  @IsNotEmpty({ message: 'Tên sách không được để trống' })
  tenSach: string;

  @IsString()
  @IsNotEmpty({ message: 'Tác giả không được để trống' })
  tacGia: string;

  @IsOptional()
  @IsNumber()
  namXuatBan?: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  soTrang?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  giaBia?: number;

  @IsNumber()
  @Min(0, { message: 'Số lượng không được âm' })
  soLuong: number;

  @IsOptional()
  @IsString()
  moTa?: string;

  @IsOptional()
  @IsString()
  hinhAnh?: string;

  @IsOptional()
  @IsNumber()
  theLoaiId?: number;

  @IsOptional()
  @IsNumber()
  nhaXuatBanId?: number;
}
