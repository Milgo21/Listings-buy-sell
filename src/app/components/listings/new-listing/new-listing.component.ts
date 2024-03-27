import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-listing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-listing.component.html',
  styleUrls: ['./new-listing.component.css']
})
export class NewListingComponent implements OnInit{
  name:string = '';
  description:string = '';
  price:string = '';
OnSubmit: any;
  constructor(){}
  ngOnInit(): void {
    
  }
  onSubmit(): void{
    alert('Created New listing');
  }

}
