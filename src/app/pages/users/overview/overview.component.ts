import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})

export class OverviewComponent implements OnInit {

  users: User[] = [];
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
      console.log(this.users)
    });
  }

}
