update rows
set table_id = $1,
    title = $2,
    status = $3,
    text = $4,
    date = $5,
    person = $6
where row_id = $7
returning *;