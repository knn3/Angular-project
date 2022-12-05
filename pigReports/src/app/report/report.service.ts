import { Inject, inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
  
export class Report {
  name: string = "";
  phoneNum: number = 0;
  breed: string = "";
  Pid: number = 0;
  location: string = "";
  longitude: number= 0;
  latitude: number= 0;
  extraNote: string ="";
  date: number= 0;
  time: number= 0;
  status: boolean = false;

  constructor() {
    
   }

  // reports = [];

  // addNewReport(name: string, phoneNum: number, breed: string, Pid: number, location: string, longitude: number, latitude: number, extraNotes: string, date: number, time: number, status: boolean) {
    


}
