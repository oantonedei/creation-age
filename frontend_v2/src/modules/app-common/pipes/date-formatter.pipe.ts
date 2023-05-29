import { Pipe, PipeTransform } from '@angular/core';
//import * as moment from 'moment';

@Pipe({
  name: 'formatDate'
})
export class DateFormatterPipe implements PipeTransform {

  transform(date: Date, format: string="Do MMM, YYYY [at] hh:mm a"): string {
    if(date){
    let formatedDate = '';//moment(date).format(format);
    return formatedDate;
    }else{
      return '';
    }
  }

}
