import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {RouterLink} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements AfterViewInit{

  @ViewChild('video', { static: true }) videoRef!: ElementRef<HTMLVideoElement>;
  powers: number[] = [1,2,3,4,5];
  categories: string[] = ["COMBATTANTS", "SUPPORTS", "MAGES", "TANKS", "TIREURS"];

  constructor(

  ) {
  }

  ngAfterViewInit() {
    const v = this.videoRef.nativeElement;
    v.defaultMuted = true;
    v.muted = true;
    v.setAttribute('muted', '');
  }
}
