export interface IOrder {
  id:string;
  added: number;
  isCancelled: boolean;
  partNo: string;
  status: { [K: number]: string };
  lastStatus: string;
}
