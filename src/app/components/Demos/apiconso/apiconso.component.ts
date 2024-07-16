import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { delay } from 'rxjs';
import { Film } from './film.model';
import { ApiconsoService } from '../apiconso.service';

@Component({
  selector: 'app-apiconso',
  standalone: true,
  imports: [],
  templateUrl: './apiconso.component.html',
  styleUrl: './apiconso.component.css'
})
export class ApiconsoComponent {

/*
  Pour utiliser l'HTTPClient => voir app.config.ts
*/

  liste : Film[] = []

  constructor(private apiconso : ApiconsoService){}

  loadData() {
    this.apiconso.loadData().subscribe({
      next : (data : Film[]) => this.liste = data,
      error : (error) => {console.log(error)},
      complete : () => {console.log("snif ma vie est finie")}
    }

    )
  }

}
