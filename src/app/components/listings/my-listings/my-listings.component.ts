import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingService } from 'src/app/services/listing.service';
import { Listing } from 'src/app/interfaces/listings';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-my-listings',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './my-listings.component.html',
  styleUrls: ['./my-listings.component.css']
})
export class MyListingsComponent {
  listings:Listing[]= []
  constructor(private listingService:ListingService,private router:Router){}
  ngOnInit():void{
    this.listings = this.listingService.getAllListings();
  }
  deleteListing(listingId:string):void{
    alert(`The listing of id:${listingId} has been successfully deleted!!!`);
    this.router.navigateByUrl('/')
  }
}
