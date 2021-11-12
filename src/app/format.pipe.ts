import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format'
})
export class FormatPipe implements PipeTransform{
  transform(n: number) {
    return n.toFixed(2)
  }
}
