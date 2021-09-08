import { Component } from '@angular/core';
import {DataLoadingService} from "./service/data-loading.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokedex';
  constructor(public loader:DataLoadingService) {
  }

}

