import {Component, OnInit} from '@angular/core';
import {Album} from "../models";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {AlbumsService} from "../albums.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{
  albums!: Album[];
  newAlbum: Album;
  loaded: boolean = false;

  constructor(private albumsService: AlbumsService) {
    this.newAlbum = {
      id: 101,
      title: '',
      body: ''
    }
  }
  ngOnInit() {
    this.getPosts();
  }

  addAlbum(){
    this.albumsService.createAlbum(this.newAlbum).subscribe((album) => {
      this.albums.unshift(album); // unshift or push
      alert('Post is created');
      this.newAlbum = {} as Album; // means initialized
    })
  }

  getPosts(){
    this.loaded = false;
    this.albumsService.getAlbums().subscribe((albums) =>{
      this.albums = albums;
      this.loaded = true;
    });
  }

  deleteAlbum(id: number){
    this.albums = this.albums.filter((a) => a.id !== id);
    this.albumsService.deleteAlbum(id).subscribe(() => {
      console.log('deleted');
    });
  }

}
