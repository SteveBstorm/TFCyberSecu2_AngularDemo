import { Component, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/Navbar/navbar.component';
import { SignalService } from './components/Demos/signal.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "C'est dynamique !";

  valeur : WritableSignal<number>
  valeurProp : number
  constructor(private signalS : SignalService){
    this.valeur = signalS.valeur
    this.valeurProp = signalS.valeurProp
  }
}
