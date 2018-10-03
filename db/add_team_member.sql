insert into teams_users
(user_id, team_id)
values($1, $2)
returning *;