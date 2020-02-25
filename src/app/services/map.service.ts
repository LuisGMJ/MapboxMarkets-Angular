import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../environments/environment';
import { GeoJson } from '../map';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  mapbox = (mapboxgl as typeof mapboxgl);

  constructor(private db: AngularFirestore) {
    this.mapbox.accessToken = environment.mapbox.accessToken;
  }

  getMarkers(): Observable<any> {
    return this.db.collection<any>('/markers').
      valueChanges({idField: 'idMarker'}).pipe(
        map(data => {
          console.log(data);
          return data;
        })
      );
  }

  getAllDocs() {
    const ref = this.db.collection('markers');
    return ref.valueChanges({idField: 'customIdName'});
  }

  createMarker(data: GeoJson) {
    console.log(data);

    const param = JSON.parse(JSON.stringify(data));

    return this.db.collection('markers')
      .add({...data});
  }

  removeMarker(idMarker: string) {
    console.log(idMarker);

    return this.db.doc('/markers/' + idMarker).delete();
  }
}
