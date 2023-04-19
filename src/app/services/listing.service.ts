import { Injectable } from '@angular/core';
import { Listing } from '../interfaces/listings';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  private listings: Listing[] = [
    {
      id: "1",
      name: "Modern 1BR Apt",
      description: "Stylish 1BR apartment in downtown area.",
      price: 1200,
    },
    {
      id: "2",
      name: "Cozy Room in Shared House",
      description: "Private room in a shared house with a backyard.",
      price: 500,
    },
    {
      id: "3",
      name: "Sunny Studio",
      description: "Bright and sunny studio apartment with a balcony.",
      price: 900,
    },
    {
      id: "4",
      name: "Spacious 2BR",
      description: "Large 2BR apartment with plenty of storage space.",
      price: 2000,
    },
    {
      id: "5",
      name: "Charming Cottage",
      description: "Lovely cottage surrounded by trees and a garden.",
      price: 800,
    }
  ];

  constructor() { }
  getAllListings(){
    return this.listings
  }
  getListingById(id:string):Listing | undefined{
    return this.listings.find(listing => listing.id === id);
  }
  addListing(listing:Listing){
    this.listings.push(listing)
  }
}
