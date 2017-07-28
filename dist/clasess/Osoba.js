"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Osoba = (function () {
    function Osoba(ime, prezime) {
        this.ime = ime;
        this.prezime = prezime;
    }
    Object.defineProperty(Osoba.prototype, "ime", {
        get: function () {
            return this._ime;
        },
        set: function (ime) {
            this._ime = ime;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Osoba.prototype, "prezime", {
        get: function () {
            return this._prezime;
        },
        set: function (prezime) {
            this._prezime = prezime;
        },
        enumerable: true,
        configurable: true
    });
    return Osoba;
}());
exports.Osoba = Osoba;
