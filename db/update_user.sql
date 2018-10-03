update users
set user_name = $1,
    email = $2,
    phone = $3,
    location = $4,
    title = $5,
    picture = $6
where user_id = $7
returning *;