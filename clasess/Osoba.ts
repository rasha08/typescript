export abstract class Osoba {

  public _ime:string;
  public _prezime:string;

  constructor (ime: string, prezime: string) {
    this.ime = ime;
    this.prezime = prezime
  }

 public get ime () {
    return this._ime
  };

  public set ime (ime: string) {
    this._ime = ime;
  }

  public get prezime () {
    return this._prezime;
  }

  public set prezime (prezime: string) {
    this._prezime = prezime;
  }
}
