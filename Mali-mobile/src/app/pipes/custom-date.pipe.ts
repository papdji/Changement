import { InjectionToken, Pipe, PipeTransform } from '@angular/core';
import { DatePipe, DATE_PIPE_DEFAULT_TIMEZONE } from '@angular/common';





   @Pipe({
     name: 'customDate'

   })
   export class CustomDatePipe extends
                DatePipe implements PipeTransform {
     transform(value: any, args?: any): any {
       return super.transform(value, "EEE, d MMM");
     }
    DATE_PIPE_DEFAULT_TIMEZONE: InjectionToken<string>;
   }
