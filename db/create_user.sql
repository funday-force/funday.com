insert into users
(user_name, email, phone, location, title, auth_id)
values ($1, $2, $3, $4, $5, $6)
returning *;