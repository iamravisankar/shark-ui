// angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// project import
import { SharedModule } from 'src/app/demo/shared/shared.module';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-customer-details',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent {
  // constructor
  constructor(public dialogRef: MatDialogRef<CustomerDetailsComponent>) {}

  userDetails = [
    {
      icon: 'ti ti-mail',
      text: 'bo@gmail.com'
    },
    {
      icon: 'ti ti-phone',
      text: '+1 (247) 849-6968'
    },
    {
      icon: 'ti ti-map-pin',
      text: 'Lesotho'
    }
  ];

  userName = [
    {
      name: 'Full Name',
      text: 'Aaron Poole',
      secondName: 'Father Name',
      otherName: 'Mr. Ralph Sabatier',
      space: 'p-t-0'
    },
    {
      name: 'Country',
      text: 'Lesotho',
      secondName: 'Zip Code',
      otherName: '247 849'
    }
  ];
}
