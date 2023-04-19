import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Listing } from 'src/app/interfaces/listings';
import { ListingService } from 'src/app/services/listing.service';

@Component({
  selector: 'app-listings-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listings-page.component.html',
  styleUrls: ['./listings-page.component.css']
})
export class ListingsPageComponent {
  listings:Listing[]=[]
  constructor( private listingService:ListingService){
    this.listings = this.listingService.getAllListings()
    console.log(this.listings);

  }

}