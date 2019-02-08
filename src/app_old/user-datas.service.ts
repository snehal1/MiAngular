import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

//import { Observable  } from 'rxjs/Obrsevable';
//import { HttpClient } from '@angular/common/http';

//import { Userdatas } from './models/userdatas'
 
@Injectable()
export class UserDatasService {

   private headers = new Headers({'Content-Type': 'application/json'});
	
	//users:string = "http://localhost/codeIgniter319/index.php/v1/users";
	
    constructor( private http : Http ) { }
	/* obj = {
		id: "1",
		name : "Intelligent Snehal"
	} 
	success(){
		return(this.obj.name);
	}*/	
	/*fetchdata():Observable<Userdatas>{
		return this.httpClient.get<Userdatas>(this.users);
	}*/
	
	fetchdata(){
		/*return this.http.get('http://localhost/codeIgniter319/index.php/v1/users');*/
		return this.http.get('http://whyiswhat.com/miaindia/fetch/details/data/mia_industries');
		/*return this.http.get('https://jsonplaceholder.typicode.com/todos');*/
		
	}
	 
	objCombine(obj, src) {
		for (var key in src) {
			if (src.hasOwnProperty(key)) obj[key] = src[key];
		}
		return obj;
	
	  }
}
