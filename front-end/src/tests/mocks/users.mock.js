export const userAdmin = [
  {
    id: 1,
    name: 'Delivery App Admin',
    email: 'adm@deliveryapp.com',
    password: 'a4c86edecc5aee06eff8fdeda69e0d04',
    role: 'administrator',
  },
];

export const userSeller = [
  {
    id: 2,
    name: 'Fulana Pereira',
    email: 'fulana@deliveryapp.com',
    password: '3c28d2b0881bf46457a853e0b07531c6',
    role: 'seller',
  },
];

export const userCustomer = [
  {
    id: 3,
    name: 'Cliente Zé Birita',
    email: 'zebirita@email.com',
    password: '1c37466c159755ce1fa181bd247cb925',
    role: 'customer',
  },
];

export const usersLogin = [
  {
    email: 'adm@deliveryapp.com',
    senha: '--adm2@21!!--',
  },
  {
    email: 'fulana@deliveryapp.com',
    senha: 'fulana@123',
  },
  {
    email: 'zebirita@email.com',
    senha: '$#zebirita#$',
  },
];

export const allUsers = [userAdmin, userSeller, userCustomer];

export const allUsersSellers = [userSeller];
