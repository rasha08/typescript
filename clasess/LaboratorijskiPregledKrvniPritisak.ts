import { LaboratorijskiPregled } from './LaboratorijskiPregled';
import { DoktorInterface } from '../interfaces/Doktor.interface';
import { PacijentInterface } from '../interfaces/Pacijent.interface';

export class LaboratorijskiPregledKrvniPritisak extends LaboratorijskiPregled {

  public _gornjaVrednost: number;
  public _donjaVrednost: number;
  public _puls: number

  constructor (doktor: DoktorInterface, pacijent: PacijentInterface) {
    super(doktor, pacijent);
  }

  get gornjaVrednost () {
    return this._gornjaVrednost;
  }

  set gornjaVrednost (gornjaVrednost:number) {
    this._gornjaVrednost = gornjaVrednost;
  }

  get donjaVrednost () {
    return this._gornjaVrednost;
  }

  set donjaVrednost (donjaVrednost: number) {
    this._donjaVrednost = donjaVrednost;
  }

  get puls () {
    return this._puls;
  }

  set puls (puls: number) {
    this._puls = puls;
  }

  public odradiPregled (pacijent: PacijentInterface, vrednosti: Array<number>) {
    if (this.imePacijenta === pacijent.ime && vrednosti) {
      this.gornjaVrednost = vrednosti[0];
      this.donjaVrednost = vrednosti[1];
      this.puls = vrednosti[2];
      
      console.log(`[ ${new Date().toString().slice(4,24)} ] Pacijent ${pacijent.ime} obavlja pregled`);
    } else {
      console.error('Dati pacijent nema zakazan pregled');
    }
  }

  public rezultatiPregleda () {
    return `Rezultati pregleda: Krvni Pritisak za pacijenta ${this.imePacijenta}: 
      Gornja Vrednost: ${this.gornjaVrednost},
      Donja Vrednost: ${this.donjaVrednost},
      Puls: ${this.puls}
      Pregled zakazao: ${this.imeDoktora}`;
  }
}
