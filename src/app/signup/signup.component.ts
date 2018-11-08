import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/@shared-module/services/data.service';
import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  constructor(private router: Router, private dataService: DataService) {}

  disabled = false;
  firstNameFormControl = new FormControl('', [Validators.required]);

  lastNameFormControl = new FormControl('', [Validators.required]);

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(3)]);

  floorFormControl = new FormControl('');

  electricalFormControl = new FormControl('');

  plumbingFormControl = new FormControl('');

  ngOnInit() {}

  signUp() {
    this.dataService.addUpdateData('users', {
      key: this.emailFormControl.value,
      first_name: this.firstNameFormControl.value,
      last_name: this.lastNameFormControl.value,
      password: this.passwordFormControl.value,
      requested: {},
      received: {},
      paired_user: {},
      ratings: [
        {
          other_rating: 1,
          own_rating: this.floorFormControl.value,
          service_type: 'flooring'
        },
        {
          other_rating: 1,
          own_rating: this.electricalFormControl.value,
          service_type: 'electrical'
        },
        {
          other_rating: 1,
          own_rating: this.plumbingFormControl.value,
          service_type: 'plumbing'
        }
      ]
    });
    this.router.navigate(['/login']);
  }

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }
    return value;
  }
}
