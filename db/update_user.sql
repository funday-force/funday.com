update users
set user_name = $1,
    email = $2,
    phone = $3,
    location = $4,
    title = $5
where user_id = $6
returning *;