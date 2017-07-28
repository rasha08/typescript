import { Osoba } from './Osoba';
import { DoktorInterface } from '../interfaces/Doktor.interface';
import { PacijentInterface } from '../interfaces/Pacijent.interface';

export class Doktor extends Osoba implements DoktorInterface{

  public _specijalnost: string;
  public _pacijenti: Array<PacijentInterface>;

  constructor (ime: string, prezime: string, specijalnost: string) {
    super (ime, prezime);
    this.spacijalnost = specijalnost;
    this.inicijalizacijaPacijenata();

    console.log(`[ ${new Date().toString().slice(4,24)} ] Kreiran doktor ${ime}`)
  }

  public get specijalnost () {
    return this._specijalnost;
  }

  public set spacijalnost (specijalnost: string) {
    this._specijalnost = specijalnost;      
  }

  public dodajPacijenta (pacijent: PacijentInterface) {
    if (this._pacijenti.indexOf(pacijent) === -1) {
      this._pacijenti.push(pacijent);
    }
  }

  public pronadjiPacijenta (pacijent: PacijentInterface) {
    return this._pacijenti
      .filter(_pacijent => _pacijent.brojZdravstvenogKartona === pacijent.brojZdravstvenogKartona)
      .pop()
  }

  private inicijalizacijaPacijenata () {
    if (!this._pacijenti) {
      this._pacijenti = [];
    }
  }
}
