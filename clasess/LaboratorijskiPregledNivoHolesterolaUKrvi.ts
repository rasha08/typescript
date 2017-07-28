import { LaboratorijskiPregled } from './LaboratorijskiPregled';
import { DoktorInterface } from '../interfaces/Doktor.interface';
import { PacijentInterface } from '../interfaces/Pacijent.interface';

export class LaboratorijskiPregledNivoHolesterolaUKrvi extends LaboratorijskiPregled {

  constructor (doktor: DoktorInterface, pacijent: PacijentInterface) {
    super(doktor, pacijent);
  }

  rezultatiPregleda () {
    return `Rezultati pregleda: Nivo Secera u krvi za pacijenta ${this.imePacijenta}: 
      Vrednost: ${this.vrednost},
      Vreme poslednjeg obroka: ${this.vremePoslednjegObroka},
      Pregled zakazao: ${this.imeDoktora}`;
  }
}
