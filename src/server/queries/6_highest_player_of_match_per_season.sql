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
--  by using windows function;
select t1.player_of_match,t1.season,t1.highest_pom from (SELECT
	player_of_match,season ,count(player_of_match) as highest_pom,
	DENSE_RANK() over( PARTITION by season
order by
	count(player_of_match) desc) as ranking
FROM
	matches m
group by
	player_of_match, season
order by
	COUNT(player_of_match) desc ) as t1 where t1.ranking=1;
