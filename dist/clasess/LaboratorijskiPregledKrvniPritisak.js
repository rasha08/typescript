"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var LaboratorijskiPregled_1 = require("./LaboratorijskiPregled");
var LaboratorijskiPregledKrvniPritisak = (function (_super) {
    __extends(LaboratorijskiPregledKrvniPritisak, _super);
    function LaboratorijskiPregledKrvniPritisak(doktor, pacijent) {
        return _super.call(this, doktor, pacijent) || this;
    }
    Object.defineProperty(LaboratorijskiPregledKrvniPritisak.prototype, "gornjaVrednost", {
        get: function () {
            return this._gornjaVrednost;
        },
        set: function (gornjaVrednost) {
            this._gornjaVrednost = gornjaVrednost;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LaboratorijskiPregledKrvniPritisak.prototype, "donjaVrednost", {
        get: function () {
            return this._gornjaVrednost;
        },
        set: function (donjaVrednost) {
            this._donjaVrednost = donjaVrednost;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LaboratorijskiPregledKrvniPritisak.prototype, "puls", {
        get: function () {
            return this._puls;
        },
        set: function (puls) {
            this._puls = puls;
        },
        enumerable: true,
        configurable: true
    });
    LaboratorijskiPregledKrvniPritisak.prototype.odradiPregled = function (pacijent, vrednosti) {
        if (this.imePacijenta === pacijent.ime) {
            if (vrednosti) {
                this.gornjaVrednost = vrednosti[0];
                this.donjaVrednost = vrednosti[1];
                this.puls = vrednosti[2];
            }
            console.log("[ " + new Date().toString().slice(4, 24) + " ] Pacijent " + pacijent.ime + " obavlja pregled");
        }
        else {
            console.error('Dati pacijent nema zakazan pregled');
        }
    };
    LaboratorijskiPregledKrvniPritisak.prototype.rezultatiPregleda = function () {
        return "Rezultati pregleda: Krvni Pritisak za pacijenta " + this.imePacijenta + ": \n      Gornja Vrednost: " + this.gornjaVrednost + ",\n      Donja Vrednost: " + this.donjaVrednost + ",\n      Puls: " + this.puls + "\n      Pregled zakazao: " + this.imeDoktora;
    };
    return LaboratorijskiPregledKrvniPritisak;
}(LaboratorijskiPregled_1.LaboratorijskiPregled));
exports.LaboratorijskiPregledKrvniPritisak = LaboratorijskiPregledKrvniPritisak;
