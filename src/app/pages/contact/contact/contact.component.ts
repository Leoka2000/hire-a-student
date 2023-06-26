import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { environment } from '../../../../environments/environment.development';


const emailjsApiKey1 = environment.EMAILJS_API_KEY1;
const emailjsApiKey2 = environment.EMAILJS_API_KEY2;
const emailjsApiKey3 = environment.EMAILJS_API_KEY3;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {
  registerForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
    message: ['', Validators.required]
  });
  
  

  constructor(private fb: FormBuilder) {}
  

   sendEmail = (data: any) => {
    emailjs.send(emailjsApiKey1, emailjsApiKey2, data, emailjsApiKey3)
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
