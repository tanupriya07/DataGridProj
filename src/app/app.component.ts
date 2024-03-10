import { Component } from '@angular/core';
import { localData } from './localData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'DataGridProj';
  localData = localData;
}
