import {Component, OnInit} from '@angular/core';
import {MyChampionService} from "../../core/services/my-champion-service/my-champion.service";
import {Champion} from "../../core/models/Champion";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-myheroes',
  standalone: true,
  imports: [],
  templateUrl: './myheroes.component.html',
  styleUrl: './myheroes.component.css'
})
export class MyheroesComponent implements OnInit{

  champions: Champion[] = [];
  loading: boolean = true;
  deleting: boolean = false;

  constructor(
    private _myChampionService: MyChampionService,
    private readonly snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {
    this.getChampions();
  }

  getChampions() {
    this._myChampionService.getMyChampions().subscribe({
      next: value => {
        this.champions = value;
        this.loading = false;
      },
      error: err => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  deleteHero(hero: Champion) {
    if (this.deleting) return;
    this.deleting = true;
    this._myChampionService.deleteMyChampion(hero.id).subscribe({
      next: value => {
        this.getChampions();
        this.snackBar.open(`${hero.name} supprimé avec succès`, 'Fermer', {
          duration: 3000, panelClass: 'success-snackbar'
        });
        this.deleting = false;
      },
      error: err => {
        console.error(err);
        this.snackBar.open(`Erreur`, 'Fermer', {
          duration: 3000, panelClass: 'error-snackbar'
        });
        this.deleting = false;
      }
    });
  }
}
