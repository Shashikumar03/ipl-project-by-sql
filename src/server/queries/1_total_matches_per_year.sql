select
	season,
	count(*) as total_matches
from
	matches
group by
	season;
