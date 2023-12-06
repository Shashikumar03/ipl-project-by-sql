select
	bowler ,
	(6 * SUM(total_runs-legbye_runs)/ count(bowler) ) as economy
from
	deliveries d
inner join matches m on
	d.match_id = m.id
where
	season = 2015
group by
	bowler
order by
	economy ASC
limit 10;

-- 
select
	bowler ,
	(6 * SUM(total_runs-legbye_runs)/ count(bowler) ) as economy
from
	deliveries d
where
	match_id in(select id from matches m where season=2015 )
group by
	bowler
order by
	economy ASC
limit 10;