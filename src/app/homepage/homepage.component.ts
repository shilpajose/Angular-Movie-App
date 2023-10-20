import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  // movie:any=searchinput.value.trim();
  moviedata:any=[]
  check:any=false
  searchMovieForm=this.fb.group({
  movie:['']
})
  constructor(private ds:DataService,private fb:FormBuilder){}

  ngOnInit(): void {
    this.check=false
  }

  searchMovie(){

    var movie=this.searchMovieForm.value.movie


    this.ds.getMoviesApi(movie).subscribe(data=>{
      this.moviedata=data
      this.check=true
    })
}
}