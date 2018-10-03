update messages
set message =  $1
where message_id = $2
returning *;