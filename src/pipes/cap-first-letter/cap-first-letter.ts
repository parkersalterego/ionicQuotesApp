import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the CapFirstLetterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'capFirstLetter',
})
export class CapFirstLetterPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string) {
    const returnedString = value.split(' ');
    return returnedString.map(function(word,index){
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join('');
  }
}
