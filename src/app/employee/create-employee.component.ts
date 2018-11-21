import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  fullNameLength = 0;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
   this.employeeForm = this.fb.group({
     fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
     email: [''],
     skills: this.fb.group({
      skillName: [''],
      experienceInYears: ['intermediate'],
      proficiency: ''
     })
   })
   this.employeeForm.get('fullName').valueChanges.subscribe(value => {
      this.fullNameLength = value.length;
      //console.log(value);
   });
  }
  onSubmit(): void {
    console.log(this.employeeForm.value);
    console.log(this.employeeForm.get('email'));   
  }
  onLoadDataClick(): void {
    this.logKeyValuePairs(this.employeeForm);
    // this.employeeForm.setValue({
    //   fullName: 'Pragim Technologies',
    //   email: 'pragim@gmail.com',
    //   skills: {
    //     skillName: "C#",
    //     experienceInYears: 5,
    //     proficiency: 'beginner'
    //   }
    // })
  }

  logKeyValuePairs(group: FormGroup): void {
    console.log(Object.keys(group.controls));
  }

}
