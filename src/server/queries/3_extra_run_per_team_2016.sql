select
	bowling_team,
	sum(extra_runs) as runs
from
	deliveries
where
	match_id in(
	select
		id
	from
		matches
	where
		season = 2016)
group by
	bowling_team
order by
	runs desc;