import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';

import { DirectorViewComponent } from '../director-view/director-view.component';
import { GenreViewComponent } from '../genre-view/genre-view.component';
import { DescriptionViewComponent } from '../description-view/description-view.component';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  movies: any[] = [];

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });
  }

  openDirectorDialog(name: string): void {
    this.dialog.open(DirectorViewComponent, {
      data: {
        Name: name
      },
      // Assign dialog width
      width: '500px'
    });
  }

  openGenreDialog(name: string): void {
    this.dialog.open(GenreViewComponent, {
      data: {
        Name: name
      },
      width: '500px'
    });
  }

  openDescriptionDialog(title: string, description: string): void {
    this.dialog.open(DescriptionViewComponent, {
      data: {
        Title: title,
        Description: description
      },
      width: '500px'
    });
  }

}
