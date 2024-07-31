export interface User {
    id: String ;
    password: string;
    first_name: string;
    second_name: string;
    email: string;  
    registrationDate: Date | null;
}