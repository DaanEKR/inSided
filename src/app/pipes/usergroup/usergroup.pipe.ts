import { Pipe, PipeTransform } from '@angular/core';
import { User, UserGroup } from 'src/app/interfaces/user';

@Pipe({
  name: 'UserGroup'
})
export class UserGroupPipe implements PipeTransform {

  transform(users: User[], userGroup: UserGroup[]): User[] {
    if (!users) {
      return [];
    }
    if (!userGroup) {
      return users;
    }

    return users.filter(user => {
      console.log(typeof userGroup)
      return userGroup === user.usergroup;
    });

}
}

