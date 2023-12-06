select
	player_dismissed,
	bowler ,
	sum(IF(player_dismissed != '', 1, 0)) as dissmisal
from
	deliveries d
where
	player_dismissed is not null
	and player_dismissed != ''
group by
	player_dismissed ,
	bowler
order by
	dissmisal DESC
limit 1 ;
