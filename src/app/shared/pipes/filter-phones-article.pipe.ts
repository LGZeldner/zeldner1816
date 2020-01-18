import { Pipe, PipeTransform } from '@angular/core';
import {Phone} from '../models/phone.model';
import {isNullOrUndefined} from "util";

@Pipe({
  name: 'filterPhonesArticle'
})
export class FilterPhonesArticlePipe implements PipeTransform {

  transform(phones: Phone[], filter: string) {
    if (!isNullOrUndefined(phones) && filter.trim() !== "") {
      let filter_phones = phones.filter(
        phone => phone.article.toLowerCase().indexOf(filter.toLowerCase()) === 0
      );
      return  filter_phones;
    }
    return phones;
  }

}
