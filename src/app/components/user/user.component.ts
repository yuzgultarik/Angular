import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users = new Array<User>();
  adlar = new Array;
  silinecekid: any;
  userdata = new User();

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.getServer();
  }

  getServer() {
    this._userService.getAll().subscribe(
      (response: Array<User>) => {
        this.users = response;
        console.log(this.users);
        this.adlar = this.users;
      },
      error => {
        console.log('sistem hata verdi', error)
      }
    );
  }

  kullanici_sil(silineceknumara: any) {
    this.silinecekid = silineceknumara;
    console.log("Kullanıcı sil", this.silinecekid);
    this._userService.deleteUser(this.silinecekid).subscribe(
      res => {
        console.log('silindi');
        this.getServer();
      }, er => {
        console.log('silinmedi', er);
      }
    );
  }

  refresh(): void {
    window.location.reload();
  };



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
  kullanici_guncelle(id:any) {
    alert("Kullanıcı Güncelle" + id);
  }


}