import { DateFormatterPipe } from "./date-formatter.pipe";
import { OrderByPipe } from "./order-by.pipe";

export const pipes=[DateFormatterPipe, OrderByPipe];

export *  from './date-formatter.pipe';
export * from './order-by.pipe';