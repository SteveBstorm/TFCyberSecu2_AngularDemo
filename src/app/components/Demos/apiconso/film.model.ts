export interface Film {
  id: number
  titre: string
  anneeSortie: number
  synopsis: string
  realisateur: Realisateur
  genre: string
  bonfilm: boolean
}

export interface Realisateur {
  nom: string
  prenom: string
}
