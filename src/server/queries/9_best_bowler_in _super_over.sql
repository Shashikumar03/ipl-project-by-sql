select
	bowler,
	(sum(total_runs-legbye_runs)* 6 / COUNT(bowler)) as eco
from
	deliveries d
where
	is_super_over != '0'
group by
	bowler
order by
	eco asc
limit 1 ;
