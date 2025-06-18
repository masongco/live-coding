import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pet } from '../models/pet.model';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private pets: Pet[] = [];
  private petSubject = new BehaviorSubject<Pet[]>([]);
  
  pets$ = this.petSubject.asObservable();

  addPet(name: string) {
    const newPet: Pet = {name, status: 'listed'};
    this.pets.push(newPet);
    this.petSubject.next(this.pets);
  }

  moveToNextStatus(pet: Pet){
    const statusFlow = ['listed', 'examining', 'finally_back_to_hooman'];
    const currentIndex = statusFlow.indexOf(pet.status);
    if (currentIndex < statusFlow.length - 1){
      pet.status = statusFlow[currentIndex + 1] as any;
      this.petSubject.next(this.pets)
    }
  }
}
