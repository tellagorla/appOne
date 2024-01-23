import { Component } from '@angular/core';
// import { Component } from '@angular/core';
import { RestService } from './service/rest.service';
// import { StudentService } from './service/student.service';
import {MatDialog} from '@angular/material/dialog';
import { EmployeeService } from './service/employee.service';
// import { DilogComponent } from './popup/dilog/dilog.component';
import { DialogComponent } from './popup/dialog/dialog.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appOne';
  data: any[]=[];

  constructor(private est:RestService,public dialog: MatDialog ,private student:EmployeeService){}

  gettableData(){
    this.student.getData().subscribe((data: any)=>{  
      this.data= data;
      console.log('data',data)
    })  
  }

  displayedColumns: string[] = ['empId', 'empName', 'empEmail', 'address','dept','symbols'];
  dataSource = this.data;
  edit(dt:any){
    this.gettableData()
  }

   openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
   }

  // addEmployee(){
  //   const dialogRef = this.dialog.open(DilogComponent,{width: '100vw',
  // data:"dinesh"});

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

   deleteitem(dt:any){
  //   this.est.deleteUser(dt.empId).subscribe({
  //     next:(res)=>{
  //       console.log("res-===",res)
  //       this.gettableData()
  //     },error:(e)=>{
  //       console.log(e)
  //       this.gettableData()
  //     },
  //     complete: () =>{
  //       console.log("Dinesh Yadav :----------------")
  //       this.gettableData()
  //     }
  //   })
    
   }
}
