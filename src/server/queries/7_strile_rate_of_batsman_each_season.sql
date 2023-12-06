select
	batsman,
	season,
	((sum(batsman_runs)* 100)/ sum(IF (d.wide_runs = 0 , 1, 0))) as strike_rate
from
	deliveries d
inner join matches m on
	d.match_id = m.id
group by
	batsman,
	season; 
