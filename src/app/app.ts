import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ClientInfo } from '../models/user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular-form');

  formStep = 1;

  // Step 1
  clientInfo = new ClientInfo('', '', '')

  // Step 2
  // Get client plan
  selectedPlan: string = '';
  selectedPlanPrice: number = 0;

  // Switch plan option (Monthly/Yearly)
  planSwitch: boolean = false;

  // Step 3
  selectedAddOns: string[] = [];


  onSubmit(form: NgForm) {
    console.log('Your Info', {
      client: this.clientInfo,
      selectedPlan: this.selectedPlan,
      planPrice: this.selectedPlanPrice,
      planSwitch: this.planSwitch,
      addOns: this.selectedAddOns,
    })
  }

  // function for next and back button
  nextStep(form: NgForm) {
    this.formStep++;
  }

  lastStep(form: NgForm) {
    this.formStep--
  }

  // Step 2 function
  clientSelectedPlan(plan: string, price: number) {
    if(this.selectedPlan === plan) {
      this.selectedPlan = '';
      this.selectedPlanPrice = 0
    } else {
      this.selectedPlan = plan;
      this.selectedPlanPrice = price;
    }
  }

  // Step 2 Plan switch
  planSwitchBtn(event: any) {
    this.planSwitch = event.target.checked
  }

  // Step 3 Selected Add-ons
  clientSelectedAddOns(addOn: string) {
    const selectAddon = this.selectedAddOns.indexOf(addOn)

    if(selectAddon > -1) {
      this.selectedAddOns.splice(selectAddon, 1);
    } else {
      this.selectedAddOns.push(addOn)
    }
  }

  addOnPrice(addOn: string) {
    switch(addOn) {
      case 'Online service':
        return this.planSwitch ? 10 : 1;
      case 'Larger storage':
        return this.planSwitch ? 20 : 2;
      case 'Customizable profile':
        return this.planSwitch ? 20 : 2;
      default:
        return 0;
    }
  }

}