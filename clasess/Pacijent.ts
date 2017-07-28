import { Osoba } from './Osoba';
import { PacijentInterface } from '../interfaces/Pacijent.interface';
import { DoktorInterface } from '../interfaces/Doktor.interface';

export class Pacijent extends Osoba implements PacijentInterface {

  public _jmbg: string;
  public _brojZdravstvenogKartona: number;
  public _izabranDoktor: string;

  constructor (ime: string, prezime:string, jmbg: string, brojZdravstvenogKartona: number) {
    super(ime, prezime);
    this.jmbg = jmbg;
    this.brojZdravstvenogKartona = brojZdravstvenogKartona;

    console.log(`[ ${new Date().toString().slice(4,24)} ] Kreiran Pacijent ${ime}`);
  }

  public get jmbg () {
    return this._jmbg;
  }

  public set jmbg (jmbg: string) {
    this._jmbg = jmbg;
  }

  public get brojZdravstvenogKartona () {
    return this._brojZdravstvenogKartona;
  }

  public set brojZdravstvenogKartona (brojZdravstvenogKartona: number) {
    this._brojZdravstvenogKartona = brojZdravstvenogKartona;
  }

  public set izabraniDoktor (doktor: DoktorInterface) {
    if (!this._izabranDoktor) {
      this._izabranDoktor = doktor.ime;
      doktor.dodajPacijenta(this);

      console.log(`[ ${new Date().toString().slice(4,24)} ] Pacijent ${this.ime} bira doktora ${doktor.ime}`);

      return;
    }
    
    console.error('Pacijent vec ima izabranog lekara!');
  }
}
