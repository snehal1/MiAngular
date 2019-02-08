import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../companies.service';
@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  users: any[];
  constructor(
    private myService: CompaniesService
  ) { 
  }

  ngOnInit() {
    this.myService.fetchdata().subscribe((response => {
			this.users = response.json();
				//console.log(this.users);
			}))		
  }

}