import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  employees: number = 0;
  averageAge: number = 0;
  averageTenure: number = 0;
  genderDiversityRatio: number = 0;
  employeeRatings: any[] = [];
  employeeStatus: any[] = [];
  employeeScores: any[] = [];
  processedEmployeeRatings: any[] = [];
  processedEmployeeStatus: any[] = [];
  e: any;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getDashboardData().subscribe(data => {
      this.employees = data.employees;
      this.averageAge = data.averageAge;
      this.averageTenure = data.averageTenure;
      this.genderDiversityRatio = data.genderDiversityRatio;
      this.employeeRatings = data.employeeRatings || [];
      this.employeeStatus = data.employeeStatus || [];
      this.employeeScores = data.employeeScores;

      this.processedEmployeeRatings = this.employeeRatings.map(e => e.count);
      this.processedEmployeeStatus = this.employeeStatus.map(e => e.count);
    });
  }

  getEmployeeRatingsLabels(): string[] {
    return this.employeeRatings.map(e => e.rating);
  }

  getEmployeeStatusLabels(): string[] {
    return this.employeeStatus.map(e => e.status);
  }

  getEmployeeStatusColors(): string[] {
    return this.employeeStatus.map(e => e.color);
  }
}
