export interface IOrder {
  added: number;
  isCancelled: boolean;
  partNo: string;
  status: { [K: number]: string };
}
