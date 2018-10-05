insert into messages
(team_id, user_id, message, date)
values($1, $2, $3, $4);

select *
from messages;