import { Component, OnInit } from '@angular/core';
import { Billing } from './billing';
import { MyService } from '../myservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
billing:Billing = new Billing();
  constructor(private myService:MyService,private router:Router) { 
    this.billing.month="Month...";
    this.billing.year="Year...";
  }

  ngOnInit() {
  }

  onSubmit(form)
  {
    this.myService.addBilling(this.billing.fullName,this.billing.cardNumber,this.billing.month,this.billing.year,this.billing.cvv,this.billing.zip).subscribe();
    this.router.navigate(['/finish']);
  }

}
