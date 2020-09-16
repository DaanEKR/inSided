export type Usergroup = 'colonel' | 'officer' | 'general' | 'lieutenant' | 'captain';

export interface User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    replies: number;
    topics: number;
    solved: number;
    usergroup: Usergroup[];
    registration_date: string;
    last_login: string;
}
