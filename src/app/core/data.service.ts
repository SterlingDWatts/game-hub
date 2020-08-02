import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { stringify } from '@angular/compiler/src/util';

@Injectable()
export class DataService {
  baseUrl = 'https://www.boardgamegeek.com/xmlapi2';
  hotness = '/hot?TYPE=boardgame';
  thing = '/thing?id=';
  stats = '&stats=1';

  constructor(private http: HttpClient) {}

  getHotness() {
    return this.http
      .get(this.baseUrl + this.hotness, { responseType: 'text' })
      .pipe(catchError(this.handleError));
  }

  getThing(id: string) {
    return this.http
      .get(this.baseUrl + this.thing + id + this.stats, {
        responseType: 'text',
      })
      .pipe(catchError(this.handleError));
  }

  toXmlDoc(responseText: string) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(responseText, 'text/xml');
    return xmlDoc;
  }

  xmlToGameArray(xmlDoc: any) {
    const games = xmlDoc.getElementsByTagName('item');
    const gamesArray = [];
    for (let i = 0; i < 10; i++) {
      gamesArray.push({
        name: games[i].getElementsByTagName('name')[0].getAttribute('value'),
        thumb: games[i]
          .getElementsByTagName('thumbnail')[0]
          .getAttribute('value'),
        rank: games[i].getAttribute('rank'),
        id: games[i].getAttribute('id'),
        yearPublished: games[i]
          .getElementsByTagName('yearpublished')[0]
          .getAttribute('value'),
      });
    }
    return gamesArray;
  }

  xmlToGame(xml: any) {
    return {
      name: xml.getElementsByTagName('name'.toLowerCase())[0].getAttribute('value'),
      rank: xml.getElementsByTagName('rank'.toLowerCase())[0].getAttribute('value'),
      average: xml.getElementsByTagName('average'.toLowerCase())[0].getAttribute('value'),
      usersRated: xml.getElementsByTagName('usersRated'.toLowerCase())[0].getAttribute('value'),
      yearPublished: xml.getElementsByTagName('yearPublished'.toLowerCase())[0].getAttribute('value'),
      minPlayers: xml.getElementsByTagName('minPlayers'.toLowerCase())[0].getAttribute('value'),
      maxPlayers: xml.getElementsByTagName('maxPlayers'.toLowerCase())[0].getAttribute('value'),
      minPlayTime: xml.getElementsByTagName('minPlayTime'.toLowerCase())[0].getAttribute('value'),
      maxPlayTime: xml.getElementsByTagName('maxPlayTime'.toLowerCase())[0].getAttribute('value'),
      playingTime: xml.getElementsByTagName('playingTime'.toLowerCase())[0].getAttribute('value'),
      minAge: xml.getElementsByTagName('minAge'.toLowerCase())[0].getAttribute('value'),
      picture: xml.getElementsByTagName('image')[0].textContent,
      description: xml.getElementsByTagName('description')[0].textContent.split(/&#10;/g)
    };
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` + `body was ${error.error}`
      );
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happended; please try again later.');
  }
}
