import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { Film } from './apiconso/film.model';


@Injectable({
  providedIn: 'root'
})
export class ApiconsoService {
 url : string = "https://localhost:7107/api/"
  constructor(private client : HttpClient) { }

  loadData() : Observable<Film[]>{
    return this.client.get<Film[]>(this.url+"film").pipe(delay(1000))
    // .subscribe({
    //   next : (data : any) => console.log(data),
    //   error : (error) => {console.log(error)},
    //   complete : () => {console.log("snif ma vie est finie")}
    // }

    // )
  }

  addFilm() {
    const film : Film =  {
      titre : "Vivement demain",
      anneeSortie : 2024,
      synopsis : "Vous allez bosser demain... et me maudire de toute votre ame",
      genre : "Souffrance",
      realisateur : {nom : "moi", prenom : "encore moi"},
      id : 42,
      bonfilm : false
    }

    let token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJhZG1pbiIsIlVzZXJJZCI6IjEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9naXZlbm5hbWUiOiJBZG1pbmlzdHJhdG9yIiwiZXhwIjoxNzIxMjExMDM1fQ.idmYjKNOFqJKo-6rh9DcoxhAo0sJqebpfgow8teUe-9IrNOCliClmg1V0GgdRzUXQS3lRODsAx4U3p_u7ejZHQ"



    let myheader : HttpHeaders = new HttpHeaders({
      'authorization' : 'bearer '+token
    })

    this.client.post(this.url+"film", film, {headers : myheader}).subscribe({
      next : () => console.log("Cool un nouveau film"),
      error : (error) => console.log("erreur : " + error.message)
    })
  }
}
