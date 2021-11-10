apartments = [
  {
    street: '666 Ocean Ave',
    city: 'Miami',
    state: 'FL',
    manager: 'Tony Montana',
    email: 'mylittlefriend@cocaine.com',
    price: '2600',
    bedrooms: 2,
    bathrooms: 2,
    pets: 'pelicans only'
  },
  {
    street: '13007 Coral Ln',
    city: 'Hobe Sound',
    state: 'FL',
    manager: 'Mark and Gale Brantley',
    email: 'markngale@brantley.com',
    price: '4000',
    bedrooms: 3,
    bathrooms: 2,
    pets: 'all pets welcome'
  },
  {
    street: '1116 Ocean Dr',
    city: 'Miami',
    state: 'FL',
    manager: 'Gianni Versace',
    email: 'gigi@fabulous.com',
    price: '14000',
    bedrooms: 10,
    bathrooms: 7,
    pets: 'never'
  }
]

first_user = User.first

apartments.each do |attribute|
  first_user.apartments.create attribute
end