import { Component, OnInit } from '@angular/core';
import "leaflet";


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  map;

  constructor() { }

  ngOnInit() {
      let tileLayer: L.TileLayer;
      tileLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');
      let dark: L.TileLayer;
      dark = L.tileLayer('https://cartodb-basemaps-b.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png');
      let grayscale = tileLayer;
      let streets = tileLayer;
      this.map = new L.Map('map', {
          center: new L.LatLng(40.4115165, -3.7076445)
          , zoom: 14
          , layers: [tileLayer, dark]
      });
  }

}
