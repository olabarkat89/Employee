import { Component, ViewChild } from '@angular/core';
import { MyApiService } from '../my-api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { CreateEmployeeComponent } from '../create-employee/create-employee.component';
import { Employee } from '../interface';

@Component({
  selector: 'app-employee-list',

  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent {
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['id', 'name', 'position', 'department', 'salary', 'action'];
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public myApi: MyApiService, protected dialog: MatDialog) { }
  ngOnInit(): void {
    this.getData()
  }
  getData() {
    this.myApi.getEmployees().subscribe(data => {
      this.dataSource.data = data;
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  viewData(id: any) {
    this.myApi.getEmployeeById(id).subscribe(data => {
      if(data){
        this.dialog.open(EmployeeDetailsComponent, { data:data });


      }
      
    });
  }
  deleteData(id: any) {
  this.myApi.deleteEmployee(id).subscribe((res)=>{
 
  })
  }
  addEmployee(){
    this.dialog.open(CreateEmployeeComponent,{width: '500px' , data: {type:'add'}})
  }
  EditData(data:Employee){
    this.dialog.open(CreateEmployeeComponent,{width: '500px' , data: {type:'edit',editData:data}})

  }
}
