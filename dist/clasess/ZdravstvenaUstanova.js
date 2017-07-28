"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Doktor_1 = require("./Doktor");
var Pacijent_1 = require("./Pacijent");
var LaboratorijskiPregledKrvniPritisak_1 = require("./LaboratorijskiPregledKrvniPritisak");
var LaboratorijskiPregledNivoHolesterolaUKrvi_1 = require("./LaboratorijskiPregledNivoHolesterolaUKrvi");
var LaboratorijskiPregledNivoSeceraUKrvi_1 = require("./LaboratorijskiPregledNivoSeceraUKrvi");
var ZdravstvenaUstanova = (function () {
    function ZdravstvenaUstanova() {
        if (ZdravstvenaUstanova.instance) {
            throw new Error('Za inicijalizaciju Zdravstvene ustanove koristite metod: kreirajZdravstvenuUstanovu');
        }
        ZdravstvenaUstanova.instance = this;
    }
    ZdravstvenaUstanova.kreirajZdravstvenuUstanovu = function () {
        return ZdravstvenaUstanova.instance;
    };
    ZdravstvenaUstanova.prototype.kreirajDoktora = function (ime, prezime, specijalnost) {
        return new Doktor_1.Doktor(ime, prezime, specijalnost);
    };
    ZdravstvenaUstanova.prototype.kreirajPacijenta = function (ime, prezime, jmbg, brojZdravstvenogKartona) {
        return new Pacijent_1.Pacijent(ime, prezime, jmbg, brojZdravstvenogKartona);
    };
    ZdravstvenaUstanova.prototype.zakaziLaboratorijskiPregled = function (doktor, pacijent, nazivPregleda) {
        if (doktor.pronadjiPacijenta(pacijent)) {
            switch (nazivPregleda) {
                case 'krvni pritisak': {
                    return new LaboratorijskiPregledKrvniPritisak_1.LaboratorijskiPregledKrvniPritisak(doktor, pacijent);
                }
                case 'nivo secera u krvi': {
                    return new LaboratorijskiPregledNivoSeceraUKrvi_1.LaboratorijskiPregledNivoSeceraUKrvi(doktor, pacijent);
                }
                case 'nivo holesterola u krvi': {
                    return new LaboratorijskiPregledNivoHolesterolaUKrvi_1.LaboratorijskiPregledNivoHolesterolaUKrvi(doktor, pacijent);
                }
                default: {
                    console.error('Ne postoji laboratorijski pregled sa datim nazivom');
                }
            }
        }
        else {
            console.error('Dati doktor nije pacijentov izabrani lekar');
        }
    };
    ZdravstvenaUstanova.instance = new ZdravstvenaUstanova();
    return ZdravstvenaUstanova;
}());
exports.ZdravstvenaUstanova = ZdravstvenaUstanova;
