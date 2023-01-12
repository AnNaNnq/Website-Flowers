import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'smallDesc'
})
export class SmallDescPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.substring(0, 100);
  }

}
