
drop table if exists users;

create table users
(
    user_id serial primary key,
    user_name text,
    email text,
    phone text,
    location text,
    title varchar(80),
    auth_id text
)

select *
from teams t
join users u
on t.user_id = u.user_id;


drop table if exists teams;

create table teams
(
    team_id serial primary key,
    user_id references users(user_id)
)