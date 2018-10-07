update boards
set title =  $1,
    description = $2
where board_id = $3
returning *;