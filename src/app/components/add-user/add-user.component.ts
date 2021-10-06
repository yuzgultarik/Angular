import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { add_user } from 'src/app/models/add_user';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { UserComponent } from '../user/user.component';



@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userdata = new User();

  constructor(private _userService: UserService) { }

  ngOnInit(): void {

  }

  

  kullanici_ekle() {
    this._userService.createUser(this.userdata).subscribe(
      response => {
        console.log('eklendi');
        //this._userService.getAll();
        this.refresh();
      }, error => {
        console.log('eklenmedi', error);
      });
      
  }

  refresh(): void {
    alert("sayfa yenilendi");
    window.location.reload();
  };

  
}
