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

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDvnNPiupWBC7YltH4yl8K1zrjItxW6Tl_5t6ew-Z7xeKDvxE7WuaWAobUEJzu70Iw9jMeQlzL6KcUIcuo'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
                    .pipe( map( data => data['albums'].items));
             
  }


  getArtista(termino:string){
    
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDvnNPiupWBC7YltH4yl8K1zrjItxW6Tl_5t6ew-Z7xeKDvxE7WuaWAobUEJzu70Iw9jMeQlzL6KcUIcuo'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers })
                    .pipe( map( data=>data['artists'].items ));

  }


}
