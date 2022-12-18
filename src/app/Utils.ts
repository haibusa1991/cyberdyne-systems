import {IProductCatalog} from "./models/IProductCatalog";
import {ICatalogCard} from "./models/ICatalogCard";
import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

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

    return `${this.padSingleDigitWithZero('' + date.getDate())}-${month[date.getMonth()]}-${date.getFullYear()}`
  }

  static milisToTime(milis:number): string {
    let date = new Date(milis);
    return `${this.padSingleDigitWithZero('' + date.getHours())}:${this.padSingleDigitWithZero('' + date.getMinutes())}:${this.padSingleDigitWithZero('' + date.getSeconds())}`
  }

 static padSingleDigitWithZero(digit:string) : string{
    return digit.padStart(2,'0');
  }

  static sortProductsByPageOrder(productArray : IProductCatalog[] | ICatalogCard[]) {
   productArray.sort((e1,e2) => e1.pageOrder - e2.pageOrder);
  }
}

export function passwordValidator(): ValidatorFn {
  return (c: AbstractControl): ValidationErrors | null => {
    if (!c.value) {
      return null;
    }
    let hasUpperCase = /[A-Z]+/.test(c.value);
    let hasLowerCase = /[a-z]+/.test(c.value);
    let hasNumeric = /[0-9]+/.test(c.value);

    let passwordValid = hasUpperCase && hasLowerCase && hasNumeric;

    return !passwordValid ? {passwordValid: true} : null;
  }
}

export function serialNumber(): ValidatorFn {
  return (c: AbstractControl): ValidationErrors | null => {
    if (!c.value) {
      return null;
    }

    let result = /[A-Z,a-z]{5}-\d{6}-[A-Z,a-z]{3}/.test(c.value);

    return !result ? {serialNumber: true} : null;
  }
}

export function exactLength(length:number): ValidatorFn {
  return (c: AbstractControl): ValidationErrors | null => {
    if (!c.value) {
      return null;
    }

    return c.value.length !== length ? {exactLength: true} : null;
  }
}
