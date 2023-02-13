import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {
public data:any;
  constructor(public apiService: ApiService) { }

  ngOnInit(): any {
    // this.data = this.apiService.getData();
    // console.log("Show all data", this.data)
    this.apiService.getData().subscribe(data=> {
      console.log('data received', data);
      this.data = data;
    })
  }

}
