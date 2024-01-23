import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AlertModule } from 'ngx-bootstrap/alert';

import{ ReactiveFormsModule } from '@angular/forms';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule,ButtonsModule,AlertModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [FormBuilder,Validators]
})
export class AppComponent 
{

  constructor(private fb: FormBuilder) { }

  MyForm = this.fb.group(
    {
      firstname: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/), Validators.minLength(4), Validators.maxLength(15)]],
      lastname: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/), Validators.minLength(4), Validators.maxLength(15)]],
      mail: ['', [Validators.required, Validators.email,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]+$/), Validators.minLength(10), Validators.maxLength(10)]],
      addr: ['', [Validators.required, Validators.pattern(/.*/), Validators.minLength(10), Validators.maxLength(50)]],
      city: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/), Validators.minLength(4), Validators.maxLength(20)]],
      state: ['', [Validators.required]],
      zip: ['', [Validators.required, Validators.pattern(/^[0-9]+$/),Validators.minLength(5), Validators.maxLength(5)]],
      comments: ['', [Validators.required, Validators.pattern(/.*/), Validators.minLength(30), Validators.maxLength(100)]]

    }
  );
}
