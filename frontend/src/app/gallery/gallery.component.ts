import { Component, OnInit } from '@angular/core';
import { ApiService, ConfigService } from '../service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images: any;
  constructor(private apiService: ApiService,
    private config: ConfigService) { }

  ngOnInit() {
    this.apiService.get(this.config.gallery_url).subscribe(data => {
      this.images = data.data;
    })
  }

}
