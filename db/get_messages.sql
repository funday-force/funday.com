select *
from messages m
join teams t
on t.team_id = m.team_id;