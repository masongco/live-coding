import { Component } from '@angular/core';
import { Pet } from '../../models/pet.model';
import { PetService } from '../../services/pet.service';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pet-manager',
  templateUrl: './pet-manager.component.html',
  imports: [FormsModule, CommonModule],
  styleUrl: './pet-manager.component.css'
})
export class PetManagerComponent {
  dogName = '';
  pets: Pet[] = [];

  constructor(private  petService: PetService){
    this.petService.pets$.subscribe(pets => this.pets = pets);
  }

  addPet() {
    if (this.dogName.trim()) {
      this.petService.addPet(this.dogName.trim());
      this.dogName = '';
    }
  }
  nextStatus(pet: Pet) {
    this.petService.moveToNextStatus(pet);
  }
  filterByStatus(status: String) {
    return this.pets.filter(p => p.status === status);
  }
}
