import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Champion} from "../../models/Champion";

@Injectable({
  providedIn: 'root'
})
export class ChampionService {

  private readonly API_URL: string = "/api/champions";
  constructor(private httpClient: HttpClient) { }

  public getChampions(): Observable<Champion[]>{
    return this.httpClient.get<Champion[]>(this.API_URL );
  }


}
