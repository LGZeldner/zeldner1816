import { Pipe, PipeTransform } from '@angular/core';
import {isNullOrUndefined} from "util";
import {Phone} from '../models/phone.model';

@Pipe({
  name: 'filterPhonesTitles'
})
export class FilterPhonesTitlesPipe implements PipeTransform {

  transform(phones: Phone[], filter: string) {
    if (!isNullOrUndefined(phones) && filter.trim() !== "") {
      let filter_phones = phones.filter(
        phone => phone.title.toLowerCase().indexOf(filter.toLowerCase()) === 0
      );
      return  filter_phones;
    }
    return phones;
  }


}
