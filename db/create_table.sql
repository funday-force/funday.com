insert into tables
(title, board_id)
values ($1, $2)
returning *;