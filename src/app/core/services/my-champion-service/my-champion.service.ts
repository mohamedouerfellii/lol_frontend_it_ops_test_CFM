import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Champion} from "../../models/Champion";
import {catchError, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
@Injectable({ providedIn: 'root' })
export class MyChampionService {
  private readonly API_URL = 'api/mychampions';

  constructor(private httpClient: HttpClient) {}

  getMyChampions(): Observable<Champion[]> {
    return this.httpClient.get<Champion[]>(this.API_URL);
  }

  getChampionById(championId: number): Observable<Champion> {
    return this.httpClient.get<Champion>(`${this.API_URL}/${championId}`);
  }

  createMyChampion(champion: Champion): Observable<Champion> {
    return this.httpClient.post<Champion>(this.API_URL, champion);
  }

  updateMyChampion(champion: Champion): Observable<Champion> {
    return this.httpClient.put<Champion>(`${this.API_URL}/${champion.id}`, champion);
  }

  deleteMyChampion(championId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.API_URL}/${championId}`);
  }
}
