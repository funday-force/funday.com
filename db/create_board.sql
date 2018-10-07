insert into boards
(team_id, title, description)
values
($1, $2, $3);

select *
from boards;