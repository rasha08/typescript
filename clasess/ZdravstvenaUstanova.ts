import { DoktorInterface } from '../interfaces/Doktor.interface';
import { PacijentInterface } from '../interfaces/Pacijent.interface';
import { Doktor } from './Doktor';
import { Pacijent } from './Pacijent';
import { LaboratorijskiPregledKrvniPritisak } from './LaboratorijskiPregledKrvniPritisak';
import { LaboratorijskiPregledNivoHolesterolaUKrvi } from './LaboratorijskiPregledNivoHolesterolaUKrvi';
import { LaboratorijskiPregledNivoSeceraUKrvi } from './LaboratorijskiPregledNivoSeceraUKrvi';

export class ZdravstvenaUstanova {
  
  private static instance: ZdravstvenaUstanova = new ZdravstvenaUstanova ();

  constructor () {
    if (ZdravstvenaUstanova.instance) {
      throw new Error ('Za inicijalizaciju Zdravstvene ustanove koristite metod: kreirajZdravstvenuUstanovu')
    }
    ZdravstvenaUstanova.instance = this;
  }

  public static kreirajZdravstvenuUstanovu () {
    return ZdravstvenaUstanova.instance;
  }

  public kreirajDoktora (ime: string, prezime: string, specijalnost: string) {
    return new Doktor (ime, prezime, specijalnost);
  }

  public kreirajPacijenta (ime: string, prezime:string, jmbg: string, brojZdravstvenogKartona: number) {
    return new Pacijent (ime, prezime, jmbg, brojZdravstvenogKartona);
  }

  public zakaziLaboratorijskiPregled (doktor: DoktorInterface, pacijent: PacijentInterface, nazivPregleda: string) {
    if (doktor.pronadjiPacijenta(pacijent)) {
      switch(nazivPregleda){
        case 'krvni pritisak': {
          return new LaboratorijskiPregledKrvniPritisak(doktor, pacijent);
        }
        case 'nivo secera u krvi': {
          return new LaboratorijskiPregledNivoSeceraUKrvi(doktor, pacijent);
        }
        case 'nivo holesterola u krvi': {
          return new LaboratorijskiPregledNivoHolesterolaUKrvi(doktor, pacijent);
        }
        default: {
          console.error('Ne postoji laboratorijski pregled sa datim nazivom');
        }
      }
    } else {
      console.error('Dati doktor nije pacijentov izabrani lekar');
    }
  }

}
