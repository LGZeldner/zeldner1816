import {Injectable, OnInit} from '@angular/core';
import {isNullOrUndefined} from "util";
import {Phone} from "../models/phone.model";
import {PhonesApiService} from "./phones-api.service";

@Injectable({
  providedIn: 'root'
})
export class PhonesService implements OnInit {
  public phones: any;
  constructor(private phonesApiService: PhonesApiService) {
    this.get_phones();

  }
  ngOnInit() {

  }
  async get_phones () {
    try {
      let gphones = this.phonesApiService.getPhones();
      this.phones = (isNullOrUndefined(await gphones)) ? [] : await gphones;

    } catch (err) {
      console.log(err);
    }
  }

  async on_add_phone (phone: Phone) {
    phone.id = (this.phones.length)
      ? this.phones[this.phones.length - 1].id + 1
      : 1;
    this.phones.push(phone);
    try {
      await this.phonesApiService.postPhones({
        title: phone.title, article: phone.article, price: phone.price, manufact: phone.manufact,
        year: phone.year, orders: phone.orders, camera: phone.camera, screen: phone.screen});
    }
    catch (e) {
      console.error(e);
    }
  }
  async on_edit_phone (ed_phone: Phone) {
    this.phones.splice (
      this.phones.findIndex (phone => {phone.id === ed_phone.id}),
      1, ed_phone);
    try {
      await this.phonesApiService.putPhones(ed_phone.id, {
        title: ed_phone.title, article: ed_phone.article, price: ed_phone.price, manufact: ed_phone.manufact,
        year: ed_phone.year, orders: ed_phone.orders, camera: ed_phone.camera, screen: ed_phone.screen});
    }
    catch (e) {
      console.error(e);
    }
  }
  async on_del_phone (del_phone_id: number) {
    this.phones.splice(this.phones.indexOf(this.phones.find((element, index, array) => {
      return (element.id === del_phone_id)
    })), 1); /* удалили из массива элемент */
    try {
      await this.phonesApiService.deletePhones(del_phone_id);
    }
    catch (e) {
      console.error(e);
    }
  }

}
