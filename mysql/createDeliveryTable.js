const connection = require("../connection");

connection.connect((err) => {
  if (err) {
    throw err;
  } else {
    const deliveryTableSql = `
CREATE TABLE  IF NOT EXISTS deliveries (
    match_id INT,
    inning INT,
    batting_team VARCHAR(255),
    bowling_team VARCHAR(255),
    \`over\` INT,
    ball INT,
    batsman VARCHAR(255),
    non_striker VARCHAR(255),
    bowler VARCHAR(255),
    is_super_over BOOLEAN,
    wide_runs INT,
    bye_runs INT,
    legbye_runs INT,
    noball_runs INT,
    penalty_runs INT,
    batsman_runs INT,
    extra_runs INT,
    total_runs INT,
    player_dismissed VARCHAR(255),
    dismissal_kind VARCHAR(255),
    fielder VARCHAR(255)
   
);
`;
    connection.query(deliveryTableSql, (err) => {
      if (err) {
        throw err;
      } else {
        console.log("delivery table is created");
      }
    });
    connection.end();
  }
});
