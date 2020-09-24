export type UserGroup = 'colonel' | 'officer' | 'general' | 'lieutenant' | 'captain';

export interface User {
    id: number;
    first_name: string;
    last_name: string;
    img: string;
    email: string;
    replies: number;
    topics: number;
    solved: number;
    usergroup: UserGroup[];
    registration_date: string;
    last_login: string;
}
