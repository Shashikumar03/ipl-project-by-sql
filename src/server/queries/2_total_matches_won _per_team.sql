SELECT
	season,
	winner,
	count(winner) as total_win
from
	matches
group by
	season,
	winner
order by
	season;