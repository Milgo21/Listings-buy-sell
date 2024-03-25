import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { Listing } from 'src/app/interfaces/listings';
import { ListingService } from 'src/app/services/listing.service';

@Component({
  selector: 'app-listing-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listing-detail.component.html',
  styleUrls: ['./listing-detail.component.css']
})
export class ListingDetailComponent implements OnInit{
  id!:string
  listing!:any;
  constructor( private route:ActivatedRoute , private ListingService:ListingService){}
  ngOnInit(): void {
    this.route.params.subscribe((param:Params)=>{
      this.id = param['id']
    })
    this.listing = this.ListingService.getListingById(this.id);

  }
}
