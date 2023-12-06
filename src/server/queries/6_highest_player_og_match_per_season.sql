select
	season,
	player_of_match ,
	count(player_of_match) as pom
from
	matches m
group by
	season,
	player_of_match
having
	count(player_of_match) = (
	select
		count(m2.player_of_match)
	from
		matches m2
	WHERE
		m2.season = m.season
	GROUP by
		m2.player_of_match
	ORDER by
		count(*) DESC
	LIMIT 1)
order by
	season ;
