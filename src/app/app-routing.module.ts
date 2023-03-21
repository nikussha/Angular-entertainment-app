import { HomeComponent } from './home/home.component';
import { BookmarkedComponent } from './bookmarked/bookmarked.component';
import { TvSeriesComponent } from './tv-series/tv-series.component';
import { MoviesComponent } from './movies/movies.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'tvseries', component: TvSeriesComponent },
  { path: 'bookmarked', component: BookmarkedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
