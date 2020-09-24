import { Component, OnInit } from '@angular/core';
import { User, UserGroup } from 'src/app/interfaces/user';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})

export class OverviewComponent implements OnInit {
  user: User;
  users: User[] = [];
  userGroup: UserGroup[];
  searchTerm: string = '';
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
    });
  }

}
