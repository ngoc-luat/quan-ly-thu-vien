// src/books/books.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  // ─── CREATE ────────────────────────────────────────────────────────────────
  // POST /books
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createBookDto: CreateBookDto) {
    const book = await this.booksService.create(createBookDto);
    return {
      statusCode: 201,
      message: 'Tạo sách thành công',
      data: book,
    };
  }

  // ─── READ ALL ──────────────────────────────────────────────────────────────
  // GET /books
  @Get()
  async findAll() {
    const books = await this.booksService.findAll();
    return {
      statusCode: 200,
      message: 'Lấy danh sách sách thành công',
      data: books,
      total: books.length,
    };
  }

  // ─── READ ONE ──────────────────────────────────────────────────────────────
  // GET /books/:id
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const book = await this.booksService.findOne(id);
    return {
      statusCode: 200,
      message: 'Lấy thông tin sách thành công',
      data: book,
    };
  }

  // ─── UPDATE ────────────────────────────────────────────────────────────────
  // PATCH /books/:id
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBookDto: UpdateBookDto,
  ) {
    const book = await this.booksService.update(id, updateBookDto);
    return {
      statusCode: 200,
      message: 'Cập nhật sách thành công',
      data: book,
    };
  }

  // ─── DELETE ────────────────────────────────────────────────────────────────
  // DELETE /books/:id
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async remove(@Param('id', ParseIntPipe) id: number) {
    const result = await this.booksService.remove(id);
    return {
      statusCode: 200,
      message: result.message,
    };
  }
}
