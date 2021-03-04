import { Injectable } from '@angular/core';
import * as _ from 'lodash'; 

const defaultData = [
  {
    id: Math.random().toString(36).substr(2, 9),
    sellerName: "Rajesh",
    currencies: ["USD"],
    offices: ["US"],
    biddedDeals: false,
    gauranteedDeals: true,
    sellerActivationDate: '',
    contactName: "",
    email: ""
  }
];

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  sellersData: any = [];

  constructor() {
    if (!this.getDataFromLocalStorage()) {
      this.setDataToLocalStorage(defaultData);
    }
    this.sellersData = this.getDataFromLocalStorage();
  }

  setDataToLocalStorage = (data) => localStorage.setItem("sellersData", JSON.stringify(data));

  getDataFromLocalStorage = () => JSON.parse(localStorage.getItem("sellersData"));

  saveDetails = (vo?) => {
    if (vo) {
      var index = this.sellersData.findIndex((obj) => obj.id === vo.id);
      if (index > -1) {
        this.sellersData.splice(index, 1, vo);
      } else {
        this.sellersData.push(vo);
      }
    }

    localStorage.removeItem("sellersData");
    this.setDataToLocalStorage(this.sellersData);
  }

  getSellerData = () => this.sellersData;

  getEditableData = (id) => _.find(this.sellersData, (obj) => obj.id === id);
}
