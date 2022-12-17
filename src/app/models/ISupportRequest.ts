export interface ISupportRequest {
  id:string;
  added:number;
  model:string;
  serial:string;
  description:string;
  logFileReference:string;
  status: { [K: number]: string };
  lastStatus:string;
}
