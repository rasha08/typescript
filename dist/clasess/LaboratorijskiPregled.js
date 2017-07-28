"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LaboratorijskiPregled = (function () {
    function LaboratorijskiPregled(doktor, pacijent) {
        this.zakaziPregled(doktor, pacijent);
    }
    Object.defineProperty(LaboratorijskiPregled.prototype, "imeDoktora", {
        get: function () {
            return this._imeDoktora;
        },
        set: function (imeDoktora) {
            this._imeDoktora = imeDoktora;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LaboratorijskiPregled.prototype, "imePacijenta", {
        get: function () {
            return this._imePacijenta;
        },
        set: function (imePacijenta) {
            this._imePacijenta = imePacijenta;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LaboratorijskiPregled.prototype, "vrednost", {
        get: function () {
            return this._vrednost;
        },
        set: function (vrednost) {
            this._vrednost = vrednost;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LaboratorijskiPregled.prototype, "vremePoslednjegObroka", {
        get: function () {
            return this._vremePoslednjegObroka;
        },
        set: function (vremePoslednjegObroka) {
            this._vremePoslednjegObroka = vremePoslednjegObroka;
        },
        enumerable: true,
        configurable: true
    });
    LaboratorijskiPregled.prototype.zakaziPregled = function (doktor, pacijent) {
        this.imeDoktora = doktor.ime;
        this.imePacijenta = pacijent.ime;
    };
    LaboratorijskiPregled.prototype.odradiPregled = function (pacijent, vrednosti) {
        if (this.imePacijenta === pacijent.ime) {
            this.vrednost = vrednosti[0];
            this.vremePoslednjegObroka = vrednosti[1];
            console.log("[ " + new Date().toString().slice(4, 24) + " ] Pacijent " + pacijent.ime + " obavlja pregled.");
        }
        else {
            console.error('Dati pacijent nema zakazan pregled');
        }
    };
    return LaboratorijskiPregled;
}());
exports.LaboratorijskiPregled = LaboratorijskiPregled;
