update users
set email = $1,
    phone = $2,
    location = $3,
    title = $4
where user_id = $5
returning *;