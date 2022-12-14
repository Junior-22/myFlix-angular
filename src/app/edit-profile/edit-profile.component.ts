import { Component, Input, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  @Input() userData: any = {};

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<EditProfileComponent>,
    public snackbar: MatSnackBar,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  /**
   * Access the API sending a POST request with the new parameters to update the user profile
   * If info is updated, logout and route to welcome
   * @function editUser
   */
  editUser(): void {
    console.log(this.userData);
    this.fetchApiData.editUser(this.userData).subscribe((result) => {
      this.dialogRef.close();
      console.log(result);
      this.snackbar.open("Profile updated", "OK", {
        duration: 6000
      });
      // let user sign in after update
      if (this.userData.Username || this.userData.Password) {
        localStorage.clear();
        this.router.navigate(["welcome"]);
        this.snackbar.open("Please login", "OK", {
          duration: 6000
        });
      }
    })
  }

}
