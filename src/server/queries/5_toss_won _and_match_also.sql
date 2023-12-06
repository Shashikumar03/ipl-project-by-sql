select
	winner,
	sum(if(toss_winner = winner, 1, 0)) as toss_and_match_winner
from
	matches
group by
	winner
order by
	toss_and_match_winner DESC ;