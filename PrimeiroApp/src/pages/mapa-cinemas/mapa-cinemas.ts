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
import { Geolocation} from '@ionic-native/geolocation'


@Component({
  selector: 'page-mapa-cinemas',
  templateUrl: 'mapa-cinemas.html',
})
export class MapaCinemasPage {
  map: GoogleMap;
  public latitude: number;
  public longitude: number;

  constructor( public navCtrl: NavController,
     private platform: Platform,
      public localizacao: Geolocation
    )
  {

  }

  ionViewDidLoad(){
   this.platform.ready().then( () => {
     this.loadMap();
   });
  }

  loadMap(){

    this.localizacao.getCurrentPosition().then((resp) => {

      this.latitude = resp.coords.latitude
      this.longitude = resp.coords.longitude;
    }).catch((error) => {
      console.log(error , "Erro localização")
    });

    


    let mapElement = document.getElementById('map');
    let mapOptions: GoogleMapOptions = {
      'camera': {
        'target': {
          "lat": this.latitude,
          "lng": this.longitude
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
        title: 'Minha Localização',
        icon: 'blue',
        animation: 'DROP',
        position: new LatLng(this.latitude,this.longitude)
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