import { Component, OnInit } from '@angular/core';
import { MyprofileService } from '../myprofile.service';
@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  users: any[];
  constructor(
    private myService: MyprofileService
  ) { 
  }

  ngOnInit() {
    this.myService.fetchdata().subscribe((response => {
      this.users = response.json();
      //console.log(response);
				console.log(this.users);
			}))		
  }

}