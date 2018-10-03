insert into messages
(message)
values($1)
returning *;