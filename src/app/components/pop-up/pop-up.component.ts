import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { environment } from '../../../environments/environment';


const emailjsApiKey4 = environment.EMAILJS_API_KEY4;
const emailjsApiKey5 = environment.EMAILJS_API_KEY5;
const emailjsApiKey6 = environment.EMAILJS_API_KEY6;

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent {

  registerForm = this.fb.group({
    yourName: ['', [Validators.required, Validators.minLength(2)]],
    friend1: ['', [Validators.required, Validators.minLength(2)]],
    friend2: ['', [Validators.required, Validators.minLength(2)]],
    friend3: ['', [Validators.required, Validators.minLength(2)]],
    email1: ['', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
    email2: ['', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
    email3: ['', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
  })

  constructor(
    private dialogRef: MatDialogRef<PopUpComponent>,
    private fb: FormBuilder
  ) { }

  close() {
    this.dialogRef.close();
  }

  sendEmail = (data: any) => {
    emailjs.send(emailjsApiKey4, emailjsApiKey5, data, emailjsApiKey6)
      .then((response) => {
        console.log('SUCCESS!', response.status);
      }, (error) => {
        console.log('FAILED...', error);
      });
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      return; // Stop submission if the form is invalid
    }
    this.sendEmail(this.registerForm.value);
    console.log('submitted form', this.registerForm.value);
    Swal.fire({
      icon: 'success',
      title: 'Your message was successfuly sent :)',
      text: 'Keep an eye on me in your email box'
  }).then(() => {
  });
  }

}