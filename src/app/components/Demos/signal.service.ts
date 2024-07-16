import { Injectable, Signal, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalService {

  valeur : WritableSignal<number> = signal(2)

  valeurProp : number = 2



  constructor() { }
}
