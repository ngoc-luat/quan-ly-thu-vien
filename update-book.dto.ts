// src/books/dto/update-book.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';

// PartialType làm tất cả các field trở thành optional
export class UpdateBookDto extends PartialType(CreateBookDto) {}
