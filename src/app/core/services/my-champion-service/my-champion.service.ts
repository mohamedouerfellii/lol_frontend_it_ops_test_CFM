import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Champion} from "../../models/Champion";
import {catchError, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MyChampionService {

  private readonly API_URL: string = "/api/mychampions";
  constructor(private httpClient: HttpClient) { }

  public getMyChampions(): Observable<Champion[]>{
    return this.httpClient.get<Champion[]>(this.API_URL );
  }

  public createMyChampion(champion: Champion){
    return this.httpClient.post(this.API_URL, champion);
  }

  public deleteMyChampion(championId: number){
    return this.httpClient.delete(`${this.API_URL}/${championId}`);
  }

  public getChampionById(championId: any):Observable<Champion>{
    return this.httpClient.get<Champion>(`${this.API_URL}/${championId}`);
  }
}
