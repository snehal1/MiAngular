import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit{
  contactForm: FormGroup;

  countries = ['USA', 'Germany', 'Italy', 'France'];

  requestTypes = ['Claim', 'Feedback', 'Help Request'];

  constructor() {
    this.contactForm = this.createFormGroup();
  }

  // Step 1
  createFormGroup() {
    return new FormGroup({
      personalData: new FormGroup({
        email: new FormControl(),
        mobile: new FormControl(),
        country: new FormControl()
      }),
      requestType: new FormControl(),
      text: new FormControl()
    });
  }
  onSubmit() {
    // Make sure to create a deep copy of the form-model
    console.log(this.contactForm.value);
  }
  ngOnInit() {}


  }