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
var LaboratorijskiPregledNivoHolesterolaUKrvi = (function (_super) {
    __extends(LaboratorijskiPregledNivoHolesterolaUKrvi, _super);
    function LaboratorijskiPregledNivoHolesterolaUKrvi(doktor, pacijent) {
        return _super.call(this, doktor, pacijent) || this;
    }
    LaboratorijskiPregledNivoHolesterolaUKrvi.prototype.rezultatiPregleda = function () {
        return "Rezultati pregleda: Nivo Secera u krvi za pacijenta " + this.imePacijenta + ": \n      Vrednost: " + this.vrednost + ",\n      Vreme poslednjeg obroka: " + this.vremePoslednjegObroka + ",\n      Pregled zakazao: " + this.imeDoktora;
    };
    return LaboratorijskiPregledNivoHolesterolaUKrvi;
}(LaboratorijskiPregled_1.LaboratorijskiPregled));
exports.LaboratorijskiPregledNivoHolesterolaUKrvi = LaboratorijskiPregledNivoHolesterolaUKrvi;
