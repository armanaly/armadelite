"use strict";
class Vehicule {
    // marque: string;
    // modele: string;
    // date_debut: string;
    // date_fin : string;
    // version: string;
    // portes: string;
    // carburant: string;
    // puissance: string;
    // boite_vitesse: string;
    constructor(marque, modele, date_debut, date_fin, version, portes, carburant, puissance, boite_vitesse) {
        this.marque = marque;
        this.modele = modele;
        this.date_debut = date_debut;
        this.date_fin = date_fin;
        this.version = version;
        this.portes = portes;
        this.carburant = carburant;
        this.puissance = puissance;
        this.boite_vitesse = boite_vitesse;
        this.marque = marque;
        this.modele = modele;
        this.date_debut = date_debut;
        this.date_fin = date_fin;
        this.version = version;
        this.portes = portes;
        this.carburant = carburant;
        this.puissance = puissance;
        this.boite_vitesse = boite_vitesse;
    }
}
exports.Vehicule = Vehicule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlaGljdWxlL3ZlaGljdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIseUJBQXlCO0lBRXpCLFlBQXFCLE1BQWMsRUFBUyxNQUFjLEVBQVMsVUFBa0IsRUFBUSxRQUFnQixFQUFTLE9BQWUsRUFBUyxNQUFjLEVBQVEsU0FBaUIsRUFBUyxTQUFpQixFQUFTLGFBQXFCO1FBQXhOLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUFRLGFBQVEsR0FBUixRQUFRLENBQVE7UUFBUyxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFRLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFBUyxjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQVMsa0JBQWEsR0FBYixhQUFhLENBQVE7UUFDek8sSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7SUFDdkMsQ0FBQztBQUNMLENBQUM7QUF0QlksZ0JBQVEsV0FzQnBCLENBQUEiLCJmaWxlIjoidmVoaWN1bGUvdmVoaWN1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgVmVoaWN1bGUge1xyXG4gICAgLy8gbWFycXVlOiBzdHJpbmc7XHJcbiAgICAvLyBtb2RlbGU6IHN0cmluZztcclxuICAgIC8vIGRhdGVfZGVidXQ6IHN0cmluZztcclxuICAgIC8vIGRhdGVfZmluIDogc3RyaW5nO1xyXG4gICAgLy8gdmVyc2lvbjogc3RyaW5nO1xyXG4gICAgLy8gcG9ydGVzOiBzdHJpbmc7XHJcbiAgICAvLyBjYXJidXJhbnQ6IHN0cmluZztcclxuICAgIC8vIHB1aXNzYW5jZTogc3RyaW5nO1xyXG4gICAgLy8gYm9pdGVfdml0ZXNzZTogc3RyaW5nO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvciAoIHB1YmxpYyBtYXJxdWU6IHN0cmluZywgcHVibGljIG1vZGVsZTogc3RyaW5nLCBwdWJsaWMgZGF0ZV9kZWJ1dDogc3RyaW5nLHB1YmxpYyBkYXRlX2Zpbjogc3RyaW5nLCBwdWJsaWMgdmVyc2lvbjogc3RyaW5nLCBwdWJsaWMgcG9ydGVzOiBzdHJpbmcscHVibGljIGNhcmJ1cmFudDogc3RyaW5nLCBwdWJsaWMgcHVpc3NhbmNlOiBzdHJpbmcsIHB1YmxpYyBib2l0ZV92aXRlc3NlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLm1hcnF1ZSA9IG1hcnF1ZTtcclxuICAgICAgICB0aGlzLm1vZGVsZSA9IG1vZGVsZTtcclxuICAgICAgICB0aGlzLmRhdGVfZGVidXQgPSBkYXRlX2RlYnV0O1xyXG4gICAgICAgIHRoaXMuZGF0ZV9maW4gPSBkYXRlX2ZpbjtcclxuICAgICAgICB0aGlzLnZlcnNpb24gPSB2ZXJzaW9uO1xyXG4gICAgICAgIHRoaXMucG9ydGVzID0gcG9ydGVzO1xyXG4gICAgICAgIHRoaXMuY2FyYnVyYW50ID0gY2FyYnVyYW50O1xyXG4gICAgICAgIHRoaXMucHVpc3NhbmNlID0gcHVpc3NhbmNlO1xyXG4gICAgICAgIHRoaXMuYm9pdGVfdml0ZXNzZSA9IGJvaXRlX3ZpdGVzc2U7XHJcbiAgICB9XHJcbn0iXX0=
