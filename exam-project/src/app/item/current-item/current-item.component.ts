import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/types/theme';
import { ProfileDetails } from 'src/app/types/user';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-current-item',
  templateUrl: './current-item.component.html',
  styleUrls: ['./current-item.component.css']
})
export class CurrentItemComponent {
  item = {} as Theme;
   

  UserId:string=''

  itemUserId:string=''
  

  constructor(
    private apiService: ApiService,
    private activeRoute: ActivatedRoute,
    private userService:UserService
  ) {}

  ngOnInit(): void {

    try {
      const { _id } = this?.userService?.user!;
    this.UserId = _id
    } catch (err) {
      this.UserId=''
    }
    

    this.activeRoute.params.subscribe((data) => {
      const id = data['itemId'];
      this.apiService.getItem(id).subscribe((item) => {
        this.itemUserId = (item?.userId).toString();
        this.item = item;
      });
    });
  }
}
