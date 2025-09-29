import {Component, OnInit} from '@angular/core';
import {Champion} from "../../core/models/Champion";
import {ChampionService} from "../../core/services/champion-service/champion.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MyChampionService} from "../../core/services/my-champion-service/my-champion.service";
import {catchError, EMPTY, finalize, min, switchMap, tap} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit {

  champions: Champion[] = [];
  loading: boolean = true;
  adding: boolean = false;

  constructor(
    private _championService: ChampionService,
    private _myChampionService: MyChampionService,
    private readonly snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {
    this._championService.getChampions().subscribe({
      next: data => {
        this.champions = data;
        this.loading = false;
      },
      error: err => {
        console.error(err);
        this.loading = false;
      }
    })
  }

  addHero(hero: Champion) {
    if (this.adding) return;
    this.adding = true;
    this._myChampionService.getChampionById(hero.id).pipe(
      tap(existing => {
        this.snackBar.open(`${existing.name} déjà ajouté`, 'Fermer', {
          duration: 3000, panelClass: 'error-snackbar'
        });
      }),
      switchMap(() => EMPTY),
      catchError((err: HttpErrorResponse) => {
        if (err.status === 404) {
          return this._myChampionService.createMyChampion(hero).pipe(
            tap(() => {
              this.snackBar.open(`${hero.name} ajouté avec succès`, 'Fermer', {
                duration: 3000, panelClass: 'success-snackbar'
              });
            })
          );
        }
        return EMPTY;
      }),
      finalize(() => this.adding = false)
    ).subscribe();
  }
}
