import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log("Servicio Spotify listo");
  }

  getQuery( query: string ){

    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCYrdKmAFHPeafl64L_CusZFYXo_JxZICDNiMZfr0AzifF_cSwmT_1pX9Rx2X08bmn41bY2NvTnNw4astA'
    });

    return this.http.get(url, {headers});

  }


  getNewReleases(){

    return this.getQuery('browse/new-releases')
               .pipe( map( data => data['albums'].items));                 
             
  }


  getArtistas(termino:string){
    
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
               .pipe( map( data => data['artists'].items));


  }


  getArtista(id:string){
    
    return this.getQuery(`artists/${ id }`);
               //.pipe( map( data => data['artists'].items));


  }

  getTopTracks(id:string){
    
    return this.getQuery(`artists/${ id }/top-tracks?country=cl`)
               .pipe( map( data => data['tracks']));


  }


}
