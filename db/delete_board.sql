delete from boards
where board_id = $1;

select *
from boards;