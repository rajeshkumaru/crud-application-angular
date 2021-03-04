import { Component, OnInit, Input } from '@angular/core';

const officesLocation = ['US', 'UK', 'JP', 'FR', 'AU', 'IT'];
const currency = ['USD', 'GBR', 'EUR'];

@Component({
  selector: 'app-multi-select-dropdown',
  templateUrl: './multi-select-dropdown.component.html',
  styleUrls: ['./multi-select-dropdown.component.scss']
})

export class MultiSelectDropdownComponent implements OnInit {
  @Input() vo: any;
  @Input() fieldName: any;
  officeOptions:any = [];
  currencyOptions: any = [];

  constructor() { }

  ngOnInit() {
    this.officeOptions = officesLocation;
    this.currencyOptions = currency;
  }

  selectOption = (selectedOption, fieldName) => {
    let index = this.vo[fieldName].indexOf(selectedOption);
    index > -1 ? this.vo[fieldName].splice(index, 1) :
      this.vo[fieldName].push(selectedOption);
  }

}
