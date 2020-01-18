import { Pipe, PipeTransform } from '@angular/core';
import {Phone} from '../models/phone.model';
import {isNullOrUndefined} from "util";

@Pipe({
  name: 'filterPhonesManufact'
})
export class FilterPhonesManufactPipe implements PipeTransform {

  transform(phones: Phone[], filter: string) {
    if (!isNullOrUndefined(phones) && filter.trim() !== "") {
      let filter_phones = phones.filter(
        phone => phone.manufact.toLowerCase().indexOf(filter.toLowerCase()) === 0
      );
      return  filter_phones;
    }
    return phones;
  }

}
