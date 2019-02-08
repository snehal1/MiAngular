import { Component, OnInit } from '@angular/core';
import { UserDatasService } from '../user-datas.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  users: any[];

  constructor(
    private myService: UserDatasService,
  ) { }

  ngOnInit() {
    this.myService.fetchdata().subscribe((response => {
			this.users = response.json();
				//console.log(this.users);
			}))		
  }

}
