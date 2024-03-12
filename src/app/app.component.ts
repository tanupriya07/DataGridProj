import { Component, ViewChild } from '@angular/core';
import { localData } from './localData';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GridSelectionMode, IgxGridComponent } from 'igniteui-angular';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  
})
export class AppComponent {
  localData = localData;
  filterForm: FormGroup;
  filteredData: { id: number; username: string; name: string; occupation: string; }[];
  displayGrid = false;
  public rowSelectable = true;
  public selectionMode: GridSelectionMode = 'multiple';
  @ViewChild('grid') grid: IgxGridComponent;
  isSideSectionVisible: boolean;
  selectedRowData: any;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.filterForm = this.fb.group({
      id: [''],
      username: ['']
    });
  }

  displayData() {
    const formValues = this.filterForm.value;
    if(formValues.id === '' && formValues.username ===''){
      this.filteredData=localData;
    }
    else {
      console.log('Display filtered data')
      this.filteredData = this.localData.filter(item => {
        return (
          (formValues.id === '' || item.id.toString().includes(formValues.id)) &&
          (formValues.username === '' || item.username.toLowerCase().includes(formValues.username.toLowerCase()))
        );
      });
    }
    

    this.displayGrid = true; 
  }

  onRowSelected(event:  any) {
    console.log(this.grid.selectedCells[0].row.data)
    this.selectedRowData = this.grid.selectedCells[0].row.data
    this.isSideSectionVisible = true;
    
  }

  closeSideSection() {
    this.isSideSectionVisible = false;
  }
  
}
