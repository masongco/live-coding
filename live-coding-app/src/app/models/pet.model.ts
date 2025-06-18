export type PetStatus = 'listed' | 'examining' | 'finally_back_to_hooman';

export interface Pet {
    name: String;
    status: PetStatus;
}