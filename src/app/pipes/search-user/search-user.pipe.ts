import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Pipe({
  name: 'searchUser'
})
export class SearchUserPipe implements PipeTransform {

  transform(users: User[], searchTerm: string): User[] {
    if (!users) {
      return [];
    }
    if (!searchTerm) {
      return users;
    }

    searchTerm = searchTerm.toLocaleLowerCase();
    return users.filter(user => {
      let fullname = user.first_name+user.last_name;
      return fullname.toLocaleLowerCase().includes(searchTerm);
    });

}
}

