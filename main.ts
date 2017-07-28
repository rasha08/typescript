import { ZdravstvenaUstanova } from './clasess/ZdravstvenaUstanova';

// kreiram zdravstvenu ustanovu
var zdravstvenaUstanova = ZdravstvenaUstanova.kreirajZdravstvenuUstanovu();

// kreiram doktora
var doktor = zdravstvenaUstanova.kreirajDoktora('Milan', 'Prazime', 'Ortoped');

// kreiram pacijenta
var pacijent = zdravstvenaUstanova.kreirajPacijenta('Dragan', 'Prezime', '0811999783428', 334);

// pacijent bira doktora
pacijent.izabraniDoktor = doktor;

// doktor zakazuje laboratorijski pregled nivo secera u krvi
var pregledNivoSeceraUKrvi = zdravstvenaUstanova.zakaziLaboratorijskiPregled(doktor, pacijent, 'nivo secera u krvi');

// doktor zakazuje laboratorijski pregled marenje krvnog pritiska
var pregledKrvniPritisak = zdravstvenaUstanova.zakaziLaboratorijskiPregled(doktor, pacijent, 'krvni pritisak');

// pacijent odradjuje pregled nivo secera u krvi
pregledNivoSeceraUKrvi.odradiPregled(pacijent, [4.1, '21:30']);

// Pacijent odradjuje pregled krvni pritisak
pregledKrvniPritisak.odradiPregled(pacijent, [120, 80, 63]);

// rezultati pregleda
// console.log(pregledKrvniPritisak.rezultatiPregleda());
// console.log()
// console.log(pregledNivoSeceraUKrvi.rezultatiPregleda())
