// src/books/books.service.ts
import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  // ─── CREATE ────────────────────────────────────────────────────────────────
  async create(createBookDto: CreateBookDto): Promise<Book> {
    // Kiểm tra mã sách đã tồn tại chưa
    const existing = await this.bookRepository.findOne({
      where: { maSach: createBookDto.maSach },
    });
    if (existing) {
      throw new ConflictException(`Mã sách "${createBookDto.maSach}" đã tồn tại`);
    }

    const book = this.bookRepository.create(createBookDto);
    return await this.bookRepository.save(book);
  }

  // ─── READ ALL ──────────────────────────────────────────────────────────────
  async findAll(): Promise<Book[]> {
    return await this.bookRepository.find({
      order: { createdAt: 'DESC' },
    });
  }

  // ─── READ ONE ──────────────────────────────────────────────────────────────
  async findOne(id: number): Promise<Book> {
    const book = await this.bookRepository.findOne({ where: { id } });
    if (!book) {
      throw new NotFoundException(`Không tìm thấy sách với ID ${id}`);
    }
    return book;
  }

  // ─── UPDATE ────────────────────────────────────────────────────────────────
  async update(id: number, updateBookDto: UpdateBookDto): Promise<Book> {
    // Kiểm tra sách tồn tại
    const book = await this.findOne(id);

    // Nếu cập nhật mã sách, kiểm tra trùng với sách khác
    if (updateBookDto.maSach && updateBookDto.maSach !== book.maSach) {
      const duplicate = await this.bookRepository.findOne({
        where: { maSach: updateBookDto.maSach },
      });
      if (duplicate) {
        throw new ConflictException(`Mã sách "${updateBookDto.maSach}" đã tồn tại`);
      }
    }

    Object.assign(book, updateBookDto);
    return await this.bookRepository.save(book);
  }

  // ─── DELETE ────────────────────────────────────────────────────────────────
  async remove(id: number): Promise<{ message: string }> {
    const book = await this.findOne(id);
    await this.bookRepository.remove(book);
    return { message: `Đã xóa sách "${book.tenSach}" thành công` };
  }
}
