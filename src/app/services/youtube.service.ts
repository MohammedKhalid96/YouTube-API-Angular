import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private http: HttpClient) {

  }

  getChannelVideos(channelId): Observable<any> {
    const API_KEY = "AIzaSyCrrqKeK7-iJX5KRQx-RLNZUjO_UqVYWmg"
    const url = "https://www.googleapis.com/youtube/v3/search?channelId=" + channelId + "&order=date&part=snippet&type=video&maxResults=20&key=" + API_KEY

    return this.http.get<any>(url)
  }

  getVideoDetails(videoId): Observable<any> {
    const API_KEY = "AIzaSyCrrqKeK7-iJX5KRQx-RLNZUjO_UqVYWmg"
    const url = " https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=" + videoId + "&key=" + API_KEY

    return this.http.get<any>(url)
  }
}
