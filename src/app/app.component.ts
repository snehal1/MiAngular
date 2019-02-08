import { Component } from '@angular/core';
import { UserDatasService } from './user-datas.service';
import { Headers, Http } from '@angular/http';
import { FormGroup , FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 private headers = new Headers({'Content-Type': 'application/json'});
  title = 'app';  
  
  users: any[];
  contactForm: FormGroup;
  selectedFile: File;
  answer: any[];
  
  constructor(
	private myService: UserDatasService,
	private http : Http
  ){
	  this.contactForm = this.createFormGroup();
  }

	ngOnInit() {		
	}

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
   // console.log(this.selectedFile.name)
  }

	createFormGroup() {
    return new FormGroup({
      personalData: new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl(),
        email: new FormControl(),
		    mobileNumber: new FormControl(),
		    status: new FormControl(),
        filexyz: new FormControl(),
        imagename: new FormControl()
      })
    });
  }

  
  
  onSubmit(){
	  //console.log(this.contactForm.value);
	  /*  this.myService.add(this.contactForm.value)
      .then(response => {		  
        console.log('response', response);
      }) */	
  var postdata : any;	  
  
  var postdata = this.contactForm.value;
  var imageName = this.selectedFile.name;
  var answer = {"imagename": imageName } ;
  var c = this.myService.objCombine(postdata, answer);

  //var c = Object.assign(answer, postdata);
  console.log(c);
 	//console.log(postdata);
	   /* postdata = 
	  {
            "firstName": "sageer1",
            "lastName": "ahamed1",
			      "email": "sageer1@gmail.com",
            "mobileNumber": "10234567891"
        }  */
		
	 this.http.post('http://localhost/codeIgniter319/index.php/v1/users/post', c )
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log('no response');
        }
      );
	 
  }
   
	
}
