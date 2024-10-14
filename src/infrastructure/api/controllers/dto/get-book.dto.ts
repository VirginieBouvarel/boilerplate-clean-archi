import { z } from "zod";
import { BookOutputDto } from "./book.dto";

// list
export const GetBooksOutputDto = z.array(BookOutputDto);
export type GetBooksOutputDto = ReturnType<typeof GetBooksOutputDto.parse>

// oneById
export const GetBookOutputDto = BookOutputDto;
export type GetBookOutputDto = ReturnType<typeof GetBookOutputDto.parse>