import { Component, OnInit } from '@angular/core';
import { ApodService } from '@services/apod.service';
import { Apod } from '@models/apod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public data: Apod = new Apod();

  constructor(private apodService: ApodService) {}

  ngOnInit() {
    this.getDailyImage();
  }

  public getDailyImage = () => {
    this.apodService.getDailyPicture().subscribe({
      next: (response) => (this.data = response),
      error: (error) => console.log(error),
    });
  };
}
