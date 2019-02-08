import { Component, OnInit } from '@angular/core';
import { UserDatasService } from '../user-datas.service';

@Component({
  selector: 'app-headercomp',
  templateUrl: './headercomp.component.html',
  styleUrls: ['./headercomp.component.css']
})
export class HeadercompComponent implements OnInit {

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
