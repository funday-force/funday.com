insert into rows
(table_id, title, status, text, date, person)
values
($1, $2, $3, $4, $5, $6);

select *
from boards;