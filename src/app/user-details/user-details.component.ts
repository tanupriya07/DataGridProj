import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
  @Input() rowData: any;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }

}
