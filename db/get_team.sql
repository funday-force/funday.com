select *
from teams_users tu
join users u 
on tu.user_id = u.user_id;