import { Component } from '@angular/core';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'searching-in-a-column-in-datatable';
  employees;
  employeeFilterCtrl;
  filteredEmployees;
  loading = false;
  isDtInitialized;
  jsonObj;
  constructor(private restService: RestService) {}
  filterByName() {
    document.querySelector('#myId').setAttribute('style', 'display: unset');
  }
  search() {
    if (!this.employees) {
      return
    }
    let search = this.employeeFilterCtrl.value;
    if (!search) {
      this.filteredEmployees.next(this.employees.slice());
      console.log(this.filteredEmployees.next(this.employees.slice()))
      return;
    } else {
      search = search.toLowerCase();
    }
    this.filteredEmployees.next(
      this.employees.filter(employee =>
        employee.firstName_FL.toLowerCase().indexOf(search) > -1)
    );
    console.log(this.employees.filter(department =>
      department.firstName_FL.toLowerCase().indexOf(search) > -1))
  }

  getActiveEmployees() {
    this.loading = true;
    // this.restService.GetActiveEmployees().subscribe((res: any) => {
    //   this.employees = res.data.employees;
    //   console.log(this.employees)
    //   const maw = JSON.stringify(this.employees)
    //   this.jsonObj = JSON.parse(maw);
    //   this.Employee.setValue(this.employees[5]);
    //   this.filteredEmployees.next(this.employees.slice());
    //   this.employeeFilterCtrl.valueChanges
    //     .pipe(takeUntil(this._onDestroy))
    //     .subscribe(() => {
    //       this.search();
    //     });
    //   if (this.isDtInitialized) {
    //     this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
    //       dtInstance.destroy();
    //       this.dtTrigger.next();
    //     });
    //   } else {
    //     this.isDtInitialized = true
    //     this.dtTrigger.next();
    //   }
    //   this.loading = false;
    // });
  }
}