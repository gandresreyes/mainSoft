import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(fecha:number): unknown {
    return  new Date(fecha * 1000).toISOString().substring(0, 10);
  }

}
