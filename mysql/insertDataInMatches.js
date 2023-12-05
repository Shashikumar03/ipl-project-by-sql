const connection = require("../connection");
const csvFilePath = "src/data/matches.csv";
const csvtojson = require("csvtojson");

async function insertIntoMatch(match) {
  const dataToInsert = `INSERT INTO matches (id, season, city, date, team1, team2, toss_winner, toss_decision, result, dl_applied, winner, win_by_runs, win_by_wickets, player_of_match, venue, umpire1, umpire2, umpire3)
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;
  const values = [
    match.id,
    match.season,
    match.city,
    match.date,
    match.team1,
    match.team2,
    match.toss_winner,
    match.toss_decision,
    match.result,
    match.dl_applied,
    match.winner,
    match.win_by_runs,
    match.win_by_wickets,
    match.player_of_match,
    match.venue,
    match.umpire1,
    match.umpire2,
    match.umpire3,
  ];

  return new Promise((resolve, reject) => {
    connection.query(dataToInsert, values, (err, insertResults) => {
      if (err) {
        reject(err);
      } else {
        resolve(insertResults);
      }
    });
  });
}
async function convertCsvToJSon(csvFilePath) {
  try {
    let result;
    const jsonArray = await csvtojson().fromFile(csvFilePath);
    for (const match of jsonArray) {
      result = await insertIntoMatch(match);
    }
    console.log("all Data inserted Successfully");
    console.log(result);
    connection.end();
  } catch (err) {
    throw err;
  }
}

convertCsvToJSon(csvFilePath);
