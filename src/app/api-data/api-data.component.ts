import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-api-data',
  templateUrl: './api-data.component.html',
})
export class ApiDataComponent implements OnInit {
  posts: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }
}
