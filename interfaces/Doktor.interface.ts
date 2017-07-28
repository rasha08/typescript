import { PacijentInterface } from './Pacijent.interface'

export interface DoktorInterface{

  ime: string;
  prezime: string;
  specijalnost: string;
  _pacijenti: Array<PacijentInterface>
  dodajPacijenta: Function;
  pronadjiPacijenta: Function;
}

