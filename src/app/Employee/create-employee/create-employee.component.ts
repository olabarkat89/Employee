import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyApiService } from '../my-api.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.scss'
})
export class CreateEmployeeComponent implements OnInit {
  addForm!: FormGroup;
  constructor(private fb: FormBuilder, public myApi: MyApiService, public dialogRef: MatDialogRef<CreateEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) {
  }
  ngOnInit(): void {
    this.addForm = this.fb.group({
      name: ['', [Validators.required]],
      position: ['', [Validators.required]],
      department: ['', [Validators.required]],
      salary: [0, [Validators.required]],
    })
    if (this.data.type === 'edit') {
      this.setData()
    }
  }
  setData(){
    this.addForm.get("name")?.setValue(this.data.editData.name)
    this.addForm.get("position")?.setValue(this.data.editData.position)
     this.addForm.get("department")?.setValue(this.data.editData.department)
     this.addForm.get("salary")?.setValue(this.data.editData.salary)

  }
  onSubmit() {
    if (this.data.type === 'add') {
      this.myApi.createEmployee(this.addForm.value).subscribe((res) => {
  
      })
    }
    if (this.data.type === 'edit') {
      this.myApi.updateEmployee(this.data.editData._id,this.addForm.value).subscribe((res) => {
      })
    }
  }
}
