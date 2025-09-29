import {Component, OnInit} from '@angular/core';
import {Champion} from "../../core/models/Champion";
import {ChampionService} from "../../core/services/champion-service/champion.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MyChampionService} from "../../core/services/my-champion-service/my-champion.service";
import {min} from "rxjs";

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
    let mines: Champion[] = [];
    this._myChampionService.getMyChampions().subscribe({
      next: data => {
          mines = data;
        let find = mines.findIndex(c => c.id == hero.id);
        if( find == -1) {
          this._myChampionService.createMyChampion(hero).subscribe({
            next: result => {
              this.snackBar.open(hero.name + " Ajouté avec succé", 'Fermer', {
                duration: 3000,
                panelClass: 'success-snackbar'
              });
            },
            error: err => {
              this.snackBar.open('Erreur' + " Erreur", 'Fermer', {
                duration: 3000,
                panelClass: 'error-snackbar'
              });
            }
          });
        } else {
          this.snackBar.open('Alerte' + " Champion déja ajouté", 'Fermer', {
            duration: 3000,
            panelClass: 'error-snackbar'
          });
        }
      }, error: err => {
        this.snackBar.open('Erreur' + " Erreur", 'Fermer', {
          duration: 3000,
          panelClass: 'error-snackbar'
        });
        console.error("Erreur : " + err);
      }
    });

  }
}
