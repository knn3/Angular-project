import { Component, AfterViewInit, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as L from 'leaflet';

import { icon, Marker } from 'leaflet';
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
}); 
Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-report-map',
  templateUrl: './report-map.component.html',
  styleUrls: ['./report-map.component.css']
})
export class ReportMapComponent implements AfterViewInit, OnInit{

  // title = 'pigReports';
  @Input() locations: any;
  // @Input() coordinates: any;


  private map: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<Object>('https://272.selfip.net/apps/DHt1XR53QT/collections/reports/documents/')
      .subscribe((data: any) => {
        for (let i = 0; i < data.length; i++){
          L.marker([data[i].data.longitude, data[i].data.latitude]).addTo(this.map)
            .bindPopup(`<b>${data[i].data.location}</b><br />cases reported.`).openPopup();
        }
       })
  }

  ngAfterViewInit(): void {
    this.map = L.map('mapid').setView([49.2, -123], 11);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoibmd1eWVuMTIzNCIsImEiOiJjbGF4dGtneXcwcmg5M25sbmp6bXlxbzIzIn0.V4qvEZAlwRhGgJ5SFfPlfA', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1
    }).addTo(this.map);
    
    // L.marker([49.2276, -123.0076]).addTo(this.map)
    //   .bindPopup("<b>Metrotown</b><br />cases reported.").openPopup();
    // L.marker([49, -124]).addTo(this.map)
    //   .bindPopup("<b>Test1</b><br />cases reported.").openPopup();

    // L.marker([49.1867, -122.8490]).addTo(this.map)
    //   .bindPopup("<b>SFU Surrey</b><br />cases reported.").openPopup();
    
    //count how many cases report in a place 
    //for loop to add marker with the number of cases in each place


  }

}
