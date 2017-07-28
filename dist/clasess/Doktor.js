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
var Osoba_1 = require("./Osoba");
var Doktor = (function (_super) {
    __extends(Doktor, _super);
    function Doktor(ime, prezime, specijalnost) {
        var _this = _super.call(this, ime, prezime) || this;
        _this.spacijalnost = specijalnost;
        _this.inicijalizacijaPacijenata();
        console.log("[ " + new Date().toString().slice(4, 24) + " ] Kreiran doktor " + ime);
        return _this;
    }
    Object.defineProperty(Doktor.prototype, "specijalnost", {
        get: function () {
            return this._specijalnost;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Doktor.prototype, "spacijalnost", {
        set: function (specijalnost) {
            this._specijalnost = specijalnost;
        },
        enumerable: true,
        configurable: true
    });
    Doktor.prototype.dodajPacijenta = function (pacijent) {
        if (this._pacijenti.indexOf(pacijent) === -1) {
            this._pacijenti.push(pacijent);
        }
    };
    Doktor.prototype.pronadjiPacijenta = function (pacijent) {
        return this._pacijenti
            .filter(function (_pacijent) { return _pacijent.brojZdravstvenogKartona === pacijent.brojZdravstvenogKartona; })
            .pop();
    };
    Doktor.prototype.inicijalizacijaPacijenata = function () {
        if (!this._pacijenti) {
            this._pacijenti = [];
        }
    };
    return Doktor;
}(Osoba_1.Osoba));
exports.Doktor = Doktor;
