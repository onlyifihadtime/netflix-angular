import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { BillingComponent } from './billing/billing.component';
import { FinishComponent } from './finish/finish.component';
const routes: Routes = [
    {path:'login', component : LoginComponent},
    {path:'confirm', component : BillingComponent},
    {path:'finish', component : FinishComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})

export class AppRoutingModule{}

export const routingComponents = [LoginComponent,BillingComponent]
