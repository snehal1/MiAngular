import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { CompaniesService } from '../companies.service';
import { MyprofileService } from '../myprofile.service';

declare var jQuery:any;   // not required
declare var $ :any;   // not required

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
  
  $('#myCarousel').on('slide.bs.carousel', function(e){
    var $e = jQuery(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 4;
    var totalItems = jQuery('.carousel-item').length;

    if (idx >= totalItems-(itemsPerSlide-1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i=0; i<it; i++) {
          // append slides to end
          if (e.direction=="left") {
            jQuery('.carousel-item').eq(i).appendTo('.carousel-inner');
          }
          else {
            jQuery('.carousel-item').eq(0).appendTo('.carousel-inner');
          }
      }
  }

  });

  
  $('#myCarousel').carousel({ 
    interval: 2000
});


$(document).ready(function() {
/* show lightbox when clicking a thumbnail */
  $('a.thumb').click(function(event){
    event.preventDefault();
    var content = $('.modal-body');
    content.empty();
    var title = $(this).attr("title");
    $('.modal-title').html(title);        
    content.html($(this).html());
    $(".modal-profile").modal({show:true});
  });

});

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