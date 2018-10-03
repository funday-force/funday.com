delete from teams_users
where user_id = $1
returning *;