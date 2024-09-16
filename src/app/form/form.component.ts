import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  clientForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.clientForm = this.fb.group({
      name: ['', Validators.required],
      headQuarter: ['', Validators.required],
      state: ['', Validators.required],
      workingState: ['', Validators.required],
      workingCity: ['', Validators.required],
      interiorCity: ['', Validators.required],
      placeOfWork: ['', Validators.required],
      reportingManager: ['', Validators.required],
      vehicle: ['', Validators.required],
      vehicleRc: ['', Validators.required],
      aadharNumber: [
        '',
        [Validators.required, Validators.pattern(/^[0-9]{12}$/)],
      ],
      salary: ['', Validators.required],
      allowanceHeadQuarter: ['', Validators.required],
      allowanceExStation: ['', Validators.required],
      allowanceOutStation: ['', Validators.required],
      distributorName: ['', Validators.required],
      csa: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.clientForm.valid) {
      console.log(this.clientForm.value);
      const formData = this.clientForm.value;
      this.clientForm.reset();
    } else {
      this.markFormGroupTouched(this.clientForm);
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
