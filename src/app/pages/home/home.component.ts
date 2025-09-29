import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements AfterViewInit{

  @ViewChild('video', { static: true }) videoRef!: ElementRef<HTMLVideoElement>;
  powers: number[] = [1,2,3,4,5];
  categories: string[] = ["COMBATTANTS", "SUPPORTS", "MAGES", "TANKS", "TIREURS"];

  ngAfterViewInit() {
    const v = this.videoRef.nativeElement;
    v.defaultMuted = true;
    v.muted = true;
    v.setAttribute('muted', '');
  }
}
