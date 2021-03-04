import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { 
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
   MatPaginatorModule,
   MatSortModule,
   MatButtonModule,
   MatCheckboxModule
  } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms'

import { SellerListComponent } from './seller-list/seller-list.component';
import { SellerWorkflowComponent } from './seller-workflow/seller-workflow.component';
import { AppComponent } from './app/app.component';
import { MultiSelectDropdownComponent } from './multi-select-dropdown/multi-select-dropdown.component';
import { DataServiceService } from './services/data-service.service';

@NgModule({
  declarations: [
    AppComponent,
    SellerListComponent,
    SellerWorkflowComponent,
    MultiSelectDropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule 
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
