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
var Pacijent = (function (_super) {
    __extends(Pacijent, _super);
    function Pacijent(ime, prezime, jmbg, brojZdravstvenogKartona) {
        var _this = _super.call(this, ime, prezime) || this;
        _this.jmbg = jmbg;
        _this.brojZdravstvenogKartona = brojZdravstvenogKartona;
        console.log("[ " + new Date().toString().slice(4, 24) + " ] Kreiran Pacijent " + ime);
        return _this;
    }
    Object.defineProperty(Pacijent.prototype, "jmbg", {
        get: function () {
            return this._jmbg;
        },
        set: function (jmbg) {
            this._jmbg = jmbg;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pacijent.prototype, "brojZdravstvenogKartona", {
        get: function () {
            return this._brojZdravstvenogKartona;
        },
        set: function (brojZdravstvenogKartona) {
            this._brojZdravstvenogKartona = brojZdravstvenogKartona;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pacijent.prototype, "izabraniDoktor", {
        set: function (doktor) {
            if (!this._izabranDoktor) {
                this._izabranDoktor = doktor.ime;
                doktor.dodajPacijenta(this);
                console.log("[ " + new Date().toString().slice(4, 24) + " ] Pacijent " + this.ime + " bira doktora " + doktor.ime);
                return;
            }
            console.error('Pacijent vec ima izabranog lekara!');
        },
        enumerable: true,
        configurable: true
    });
    return Pacijent;
}(Osoba_1.Osoba));
exports.Pacijent = Pacijent;
