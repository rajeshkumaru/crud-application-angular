import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellerListComponent } from './seller-list/seller-list.component';
import { SellerWorkflowComponent } from './seller-workflow/seller-workflow.component';

const routes: Routes = [
  { path: '', component: SellerListComponent },
  { path: 'seller/new', component: SellerWorkflowComponent },
  { path: 'seller-list', component: SellerListComponent },
  { path: 'seller/edit/:id', component: SellerWorkflowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
