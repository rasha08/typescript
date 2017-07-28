import { PacijentInterface } from '../interfaces/Pacijent.interface';
import { DoktorInterface } from '../interfaces/Doktor.interface';
import { LaboratorijskiPregledInterface } from '../interfaces/LaboratorijskiPregled.interface'

export abstract class LaboratorijskiPregled implements LaboratorijskiPregledInterface {

  public _imeDoktora: string;
  public _imePacijenta: string;
  public _vremePoslednjegObroka: string;
  public _vrednost: number;

  constructor (doktor: DoktorInterface, pacijent: PacijentInterface) {
    this.zakaziPregled(doktor, pacijent);
  }

  get imeDoktora () {
    return this._imeDoktora;
  }

  set imeDoktora (imeDoktora: string) {
    this._imeDoktora = imeDoktora;
  }

  get imePacijenta () {
    return this._imePacijenta;
  }

  set imePacijenta (imePacijenta: string) {
    this._imePacijenta = imePacijenta;
  }

  get vrednost () {
    return this._vrednost;
  }

  set vrednost (vrednost: number) {
    this._vrednost = vrednost
  }

  get vremePoslednjegObroka () {
    return this._vremePoslednjegObroka;
  }

  set vremePoslednjegObroka (vremePoslednjegObroka) {
    this._vremePoslednjegObroka = vremePoslednjegObroka;
  }

  public zakaziPregled (doktor: DoktorInterface, pacijent: PacijentInterface) {
    this.imeDoktora = doktor.ime;
    this.imePacijenta = pacijent.ime;
  }

  public odradiPregled (pacijent:PacijentInterface, vrednosti: Array<any>) {
    if (this.imePacijenta === pacijent.ime) {
      this.vrednost = vrednosti[0];
      this.vremePoslednjegObroka = vrednosti[1];

      console.log(`[ ${new Date().toString().slice(4,24)} ] Pacijent ${pacijent.ime} obavlja pregled.`);
      console.log(`[ ${new Date().toString().slice(4,24)} ] Pacijent ${pacijent.ime} obavlja pregled.`);
    } else {
      console.error('Dati pacijent nema zakazan pregled');
    }
  }

  public abstract rezultatiPregleda (): string;
}
