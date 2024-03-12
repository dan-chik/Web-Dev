import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterModule} from "@angular/router";
import {Album} from "../models";
import {AlbumsService} from "../albums.service";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit{
  loaded!: boolean;
  album!: Album;

  constructor(private route: ActivatedRoute,
              private albumService: AlbumsService) {
  }

  ngOnInit() {
    this.getAlbums();
  }

  getAlbums(){
    this.route.paramMap.subscribe((params)=> {
      const albumId = Number(params.get('albumId'));
      this.loaded = false;
      this.albumService.getAlbum(albumId).subscribe((album) => {
        this.album = album;
        this.loaded = true;
      });
    });
  }

  saveAlbum(){
    this.route.paramMap.subscribe((params)=> {
      const albumTitle = String(params.get('albumTitle'));
      this.albumService.updateAlbum(this.album).subscribe((album)=>{
        this.album.title = albumTitle;
      })
    })
  }

}
