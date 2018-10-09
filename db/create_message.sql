insert into messages
(team_id, user_id, message, date)
values($1, $2, $3, $4);

select tu.user_id, m.message_id, m.message, m.date, u.user_name 
from messages m
join teams_users tu
on tu.team_id = m.team_id
join users u
on u.user_id = tu.user_id;