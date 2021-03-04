import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataServiceService } from '../services/data-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SellerData } from '../interfaces/SellerData';

@Component({
  selector: 'app-seller-workflow',
  templateUrl: './seller-workflow.component.html',
  styleUrls: ['./seller-workflow.component.scss']
})
export class SellerWorkflowComponent implements OnInit {
  currentDate = new Date().toISOString().split('T')[0];
  currencyField: String = '';
  officeField: string = '';
  editableData: SellerData;
  showNameValidationError: boolean = false;
  showCurrencyValidationError: boolean = false;
  showOfficeValidationError: boolean = false;

  sellerForm = new FormGroup({
    id: new FormControl(null),
    sellerName: new FormControl(''),
    currencies: new FormControl([]),
    offices: new FormControl([]),
    biddedDeals: new FormControl(false),
    gauranteedDeals: new FormControl(true),
    sellerActivationDate: new FormControl(''),
    contactName: new FormControl(''),
    email: new FormControl('', [Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])
  });

  constructor(private dataService: DataServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.currencyField = 'currencies';
    this.officeField = 'offices';
    let id = this.route.snapshot.paramMap.get('id');

    if (id != null) {
      this.editableData = this.dataService.getEditableData(id);
      this.sellerForm.setValue(this.editableData);
    }
  }

  saveRecord = () => {
    if (!this.sellerForm.value.sellerName || !this.sellerForm.value.currencies.length || !this.sellerForm.value.offices.length) {
      if (!this.sellerForm.value.sellerName) {
        this.showNameValidationError = true;
      }
      this.showCurrencyValidationError = this.sellerForm.value.currencies.length === 0;
      this.showOfficeValidationError = this.sellerForm.value.offices.length === 0;
      return;
    }

    if (this.sellerForm.value && !this.sellerForm.value.id) {
      this.sellerForm.value.id = Math.random().toString(36).substr(2, 9);
    }
    this.dataService.saveDetails(this.sellerForm.value);
    this.router.navigate(['/seller-list']);
  }

  cancel = () => {
    if (this.sellerForm.dirty || this.sellerForm.value.currencies.length || this.sellerForm.value.offices.length) {
      if (window.confirm("It looks like you have been editing something. If you leave before saving, your changes will be lost.")) {
        this.router.navigate(['/seller-list']);
      } else {
        return;
      }
    } else {
      this.router.navigate(['/seller-list']);
    }
  }
}
