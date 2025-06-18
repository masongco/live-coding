import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PetManagerComponent } from "./components/pet-manager/pet-manager.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PetManagerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'live-coding-app';
}
