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
}
