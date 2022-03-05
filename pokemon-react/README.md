API: https://pokeapi.co/api/v2/pokemon/1/


db---------
Table users as U {
  id int [pk, increment] // auto-increment
  full_name varchar
  created_at timestamp
}

Table pokemon{
  id int
  image string
  ability1 string
  ability2 string
}

Table abilities{
  id int
  name string
  damage int
}