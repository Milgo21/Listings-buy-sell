import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { Listing } from 'src/app/interfaces/listings';
import { ListingService } from 'src/app/services/listing.service';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  email: string='wewew';
  message:string='';
  listing!:Listing | any;
  id!:string;
  constructor (private listingService:ListingService,private router:Router, private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe((param:Params)=>{
      this.id = param['id'];
      this.listing = this.listingService.getListingById(this.id);
      this.message = `Hi is${this.listing.name.toLowerCase()}, still available? I am interested.`
      console.log(this.message);

    })
  }
  sendEmail(): void{
    alert('Mail sent!');
    this.router.navigateByUrl('/');
  }
}
