import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image',
})
export class ImagePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return `/assets/icons/${value.toLowerCase().replace(/[ ]+/g, '-')}.png`;
  }
}
