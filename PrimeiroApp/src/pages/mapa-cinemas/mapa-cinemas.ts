import {Component} from '@angular/core';
import {NavController , Platform} from 'ionic-angular';
import { 
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  Marker,
  LatLng
} from '@ionic-native/google-maps'; 


@Component({
  selector: 'page-mapa-cinemas',
  templateUrl: 'mapa-cinemas.html',
})
export class MapaCinemasPage {
  map: GoogleMap;


  constructor( public navCtrl: NavController, private platform: Platform)
  {

  }

  ionViewDidLoad(){
   this.platform.ready().then( () => {
     this.loadMap();
   });
  }

  loadMap(){

    let mapElement = document.getElementById('map');
    let mapOptions: GoogleMapOptions = {
      'camera': {
        'target': {
          "lat": 21.382314,
          "lng": -157.933097
        },
        'zoom': 10
      }
    };

    this.map = GoogleMaps.create(mapElement, mapOptions);

    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      this.map.on(GoogleMapsEvent.MAP_CLICK).subscribe( () => {
        console.log('Map Clicked');
      });

      this.map.on(GoogleMapsEvent.MAP_DRAG_START).subscribe( () => {
        console.log('map drag start');
      });

      this.map.on(GoogleMapsEvent.MAP_DRAG_END).subscribe( () => {
        console.log('map drag end');
      });

      return this.map.addMarker({
        title: 'Locations S',
        icon: 'blue',
        animation: 'DROP',
        position: new LatLng(21.382314, -157.933097)
      })
    }).then((marker:Marker) => {
      console.log('marker added');
      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        alert('clicked');
      });

      marker.on(GoogleMapsEvent.MARKER_DRAG_START).subscribe( () => {
        console.log('marker drag start');
      });

      marker.on(GoogleMapsEvent.MARKER_DRAG_END).subscribe( () => {
        console.log('marker drag end');
      })
    });

  }
  

}