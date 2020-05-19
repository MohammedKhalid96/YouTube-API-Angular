import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { YoutubeService } from '../services/youtube.service'

import { Observable } from 'rxjs'

@Component({
    selector: 'app-video-details',
    templateUrl: './video-details.component.html',
    styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit {
    details: any

    video: Observable<any>

    constructor(private route: ActivatedRoute, private youtube: YoutubeService) { }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            let id = params.get('videoid');
            this.youtube.getVideoDetails(id).subscribe((data) => {
                this.details = data.items
            });
        });
    }

    setSaving(element, text) {
        element.textContent = text;
        element.disabled = true;
    }
}