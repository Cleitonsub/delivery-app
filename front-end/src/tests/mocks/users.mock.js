export const userAdminAcess = {
  id: 1,
  name: 'Delivery App Admin',
  email: 'adm@deliveryapp.com',
  role: 'administrator',
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
};

export const userAdmin = {
  id: 1,
  name: 'Delivery App Admin',
  email: 'adm@deliveryapp.com',
  password: 'a4c86edecc5aee06eff8fdeda69e0d04',
  role: 'administrator',
};

export const userSeller = {
  id: 2,
  name: 'Fulana Pereira',
  email: 'fulana@deliveryapp.com',
  password: '3c28d2b0881bf46457a853e0b07531c6',
  role: 'seller',
};

export const userCustomer = {
  id: 3,
  name: 'Cliente Zé Birita',
  email: 'zebirita@email.com',
  password: '1c37466c159755ce1fa181bd247cb925',
  role: 'customer',
};

export const newUser = {
  name: 'Maria Biritinha',
  email: 'maria_biritinha@gmail.com',
  password: '$bmiarriitai1n2h3a$',
  role: 'customer',
  roleOption: 'Cliente',
};

export const allUsers = [userAdmin, userSeller, userCustomer];

export const allUsersSellers = [userSeller];
