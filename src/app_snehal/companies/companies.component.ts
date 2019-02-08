import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { CompaniesService } from '../companies.service'
import { MyprofileService } from '../myprofile.service'

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
 private headers = new Headers({'Content-Type': 'application/json'});
 
  users: any[];
  description : any[];
  constructor(
    private http : Http,
    private myService: CompaniesService,
	private myProfile : MyprofileService
  ) { 
  }

  ngOnInit() {
    this.myService.fetchdata().subscribe((response => {
		this.users = response.json();
	   console.log(this.users);
	}))	

	this.myProfile.fetchdata().subscribe((response => {
	  this.description = response.json();
	   console.log(this.description);
	}))		
 	
  }

  myfunction(id){
	  const data = [{'cid': id }];

   this.http.post('http://localhost/codeIgniter319/index.php/v1/companydetails/post', data ).subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log('no response');
        }
      );
	 
  }
}