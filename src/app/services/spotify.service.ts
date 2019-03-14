import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log("Servicio Spotify listo");
  }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBnI8TWKQ-Kxw14AqXkZoBOcPG-QLhjLopNmk8VuCSIJR8ToH9BVQOWuFtQY1-uXPcbxIuNOll6QdV6gxs'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
             
  }

}
