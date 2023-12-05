const connection = require("../connection");

connection.connect((err) => {
  if (err) {
    throw err;
  } else {
    // SQL statement to create the table
    const createMatchSqlTable = `
      CREATE TABLE IF NOT EXISTS matches (
        id INT AUTO_INCREMENT PRIMARY KEY,
        season INT,
        city VARCHAR(255),
        date VARCHAR(300),
        team1 VARCHAR(255),
        team2 VARCHAR(255),
        toss_winner VARCHAR(255),
        toss_decision VARCHAR(255),
        result VARCHAR(255),
        dl_applied INT,
        winner VARCHAR(255),
        win_by_runs INT,
        win_by_wickets INT,
        player_of_match VARCHAR(255),
        venue VARCHAR(255),
        umpire1 VARCHAR(255),
        umpire2 VARCHAR(255),
        umpire3 VARCHAR(255)
      );
     `;

    // Execute the table creation SQL statement
    connection.query(createMatchSqlTable, (err) => {
      if (err) throw err;
      console.log("Table created or already exists");
    });
  }
  connection.end();
});
