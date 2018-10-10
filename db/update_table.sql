update tables
set title =  $1
where table_id = $2
returning *;