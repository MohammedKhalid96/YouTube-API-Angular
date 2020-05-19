import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../services/youtube.service'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  videos: any;
  p: number = 1;

  constructor(private youtube: YoutubeService) { }

  ngOnInit() {
    this.youtube.getChannelVideos("UCWv7vMbMWH4-V0ZXdmDpPBA").subscribe((data) => {
      this.videos = data.items
    })
  }

}
