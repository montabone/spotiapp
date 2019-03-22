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
      'Authorization': 'Bearer BQCwV1fh8D6jBm2cnlkzJtgfOHgzMuvn75b8i5e2e3fxTldyogAFF0xvFbYbEZ8bZbKLJGK3kzZRuctmpEM'
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
