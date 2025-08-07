export interface User {
  username: string;
  email: string;
  password: string;
  fullname: string;
}

export const users: User[] = [
  {
    username: "TechnoTron100",
    email: "UmarAbuAmmar@gmail.com",
    password: "123456789",
    fullname: "Umar Ahmed Aminu",
  },
  {
    username: "InnovativeSphere",
    email: "SalimSambo@gmail.com",
    password: "123456789",
    fullname: "Salim Ahmed Sambo",
  },
  {
    username: "JohnDoe_54",
    email: "JohnDoe54@gmail.com",
    password: "123456789",
    fullname: "John Doe",
  },
];
