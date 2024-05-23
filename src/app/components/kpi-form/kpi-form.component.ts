import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-kpi-form',
  templateUrl: './kpi-form.component.html',
  styleUrls: ['./kpi-form.component.css'],
  standalone:false,
})
export class KpiFormComponent {
  kpiForm: FormGroup;
  categories = ['Profitability', 'Customer Service', 'New Category'];
  targetTypes = ['A higher result is favourable', 'A lower result is favourable'];

  constructor(private fb: FormBuilder) {
    this.kpiForm = this.fb.group({
      kpiName: ['', Validators.required],
      description: [''],
      unitOfMeasure: ['Number', Validators.required],
      aggregation: ['Summative', Validators.required],
      targetType: [this.targetTypes[0], Validators.required],
      target: ['Zero', Validators.required],
      category: ['Profitability', Validators.required]
    });
  }

  onSubmit() {
    if (this.kpiForm.valid) {
      console.log(this.kpiForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
