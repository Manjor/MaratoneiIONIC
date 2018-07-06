import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import {Geolocation} from '@ionic-native/geolocation';
import { DomSanitizer } from '@angular/platform-browser';
import {GoogleMaps, GoogleMap, GoogleMapOptions, Marker, GoogleMapsEvent} from '@ionic-native/google-maps'
import { animation } from '@angular/core/src/animation/dsl';


/**
 * Generated class for the MapaCinemasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mapa-cinemas',
  templateUrl: 'mapa-cinemas.html',
})
export class MapaCinemasPage {

  public latitude: number;
  public longitude: number;



  map: GoogleMap;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    private geolocation: Geolocation,
    private sanitizer: DomSanitizer,
    private platform: Platform
  ) {
    this.platform.ready().then(()=>{
      this.minhaLocalizacao();
      this.loadMap();
    })
  }
  
  

  ionViewDidLoad() {
      this.minhaLocalizacao();
      this.loadMap();
  }

  loadMap()
  {

    let opcoes : GoogleMapOptions = {

      camera: {
        target: {
          lat: this.latitude,
          lng:this.longitude
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.map = GoogleMaps.create('map_canvas',opcoes);

    let desenho: Marker = this.map.addMarkerSync({
      title: 'Ionic',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: this.latitude,
        lng: this.longitude
      }
    });
    

    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      console.log('Mapa Pronto');
    })
    console.log('Entrei no Mapa');
  }

  minhaLocalizacao()
  {
    this.geolocation.getCurrentPosition().then((resp) => {

      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude
    }).catch((error) => {
      console.log("Erro Location",error)
    });
  }




}
