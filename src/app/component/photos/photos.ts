import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  imports: [],
  templateUrl: './photos.html',
  styleUrl: './photos.css',
})
export class Photos implements OnInit{
  photosList:  any[] = [];
  http = inject(HttpClient);
  isFormSubmitted: boolean = true;

  newPhotos: any ={
    "albumId": 0,
    "id": 0,
    "title": "",
    "url": "",
    "thumbnailUrl": ""
  }

  ngOnInit(): void {
    this.getAllPhotos();
  }

  getAllPhotos() {
    this.http.get('https://jsonplaceholder.typicode.com/photos').subscribe((result: any) => {
      this.photosList = result;
      console.log('Photos List', this.photosList)
    })
  }
}
