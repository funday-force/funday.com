insert into messages
(team_id, user_id, message, date)
values($1, $2, $3, $4);

select m.message, m.date, m.message_id, u.user_name, u.picture
from messages m
join teams t
on t.team_id = m.team_id
join users u 
on u.user_id = m.user_id;