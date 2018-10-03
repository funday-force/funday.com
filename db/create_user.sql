insert into users
(user_name, email, phone, location, title, picture, auth_id)
values ($1, $2, $3, $4, $5, $6, $7)
returning *;