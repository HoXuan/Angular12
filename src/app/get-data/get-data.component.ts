import { Component, OnInit } from '@angular/core';
import { HttpServerService } from '../Services/http-server.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.scss']
})
export class GetDataComponent implements OnInit {

  constructor(private httpserverservice: HttpServerService) { }

  ngOnInit(): void {
    // this.httpserverservice.getComments().subscribe(data => {
    //   console.log('data: ', data);
    // });
    const payload = {
    "body": "some comment 3",
    "postId": 3};
    this.httpserverservice.postComment(payload).subscribe(data => {
      console.log('data: ', data);
    });
  }

}
