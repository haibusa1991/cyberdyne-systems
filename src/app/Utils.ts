export class Utils {
  static milisToDate(milis:number) : string {
    let date = new Date(milis);

    let month :{[K:number]:string} = {
      0 : 'Jan',
      1 : 'Feb',
      2 : 'Mar',
      3 : 'Apr',
      4 : 'May',
      5 : 'Jun',
      6 : 'Jul',
      7 : 'Aug',
      8 : 'Sep',
      9 : 'Oct',
      10 : 'Nov',
      11 : 'Dec',
    }

    return `${date.getDate()}-${month[date.getMonth()]}-${date.getFullYear()}`
  }

  static milisToTime(milis:number): string {
    let date = new Date(milis);
    return `${date.getHours()}:${date.getHours()}:${date.getSeconds()}`
  }
}

