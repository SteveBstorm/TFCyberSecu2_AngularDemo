import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';
import { SignalService } from '../signal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {

  liste : number[] = [0, 1, 2, 3, 4]

  Color = Color

  value : WritableSignal<number> = signal(2)

  constructor(
    private signalS : SignalService
  ) {
    this.value = signalS.valeur
    this.valeurProp = signalS.valeurProp
  }

  valeurProp : number
  increment() {
    this.valeurProp = 42
    this.signalS.valeurProp = 42
  }

  class = signal(Color.blue)
  classColor : Signal<string> = computed(() => {
    if(this.class() == Color.blue) return 'blue'
    if(this.class() == Color.red) return 'red'
    if(this.class() == Color.green) return 'green'
    return ''
  })
}

export enum Color {
  red, green, blue
}
