import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

declare var mapboxgl: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit {

  @Input() coords: string;
  @ViewChild('mapa', {static: true}) mapa: any;

  constructor() { }

  ngOnInit() {
    

    const latLng = this.coords.split(',');
    const lat = Number(latLng[0]);
    const lng = Number(latLng[1]);

    mapboxgl.accessToken = 'pk.eyJ1IjoiamltbXlrbmRyeXgiLCJhIjoiY2w3NjV2M2U4MXlsOTNwbGNremZ6M3M4cyJ9.ooZOplsY9x2s5cKpvUY_hQ';
    const map = new mapboxgl.Map({
      container: this.mapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng,lat],
      zoom: 15
    });

    const marker = new mapboxgl.Marker()
      .setLngLat([lng,lat])
      .addTo(map);
  }

}
