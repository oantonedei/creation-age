export interface IPaginated<T> {
    currentPage?: number;
    currentRecordCount?:number;
    totalRecordCount?:number;
    totalPages?:number;
    records?:T[];
}
