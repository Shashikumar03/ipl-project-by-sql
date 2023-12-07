const connection = require("../connection");
const csvFilePath = "src/data/deliveries.csv";
const csvtojson = require("csvtojson");

function insertIntoDel(deliveryObj) {
  const insertQuery = `
  INSERT INTO deliveries 
  (match_id, inning, batting_team, bowling_team, \`over\`, ball, batsman, non_striker, bowler, is_super_over,
  wide_runs, bye_runs, legbye_runs, noball_runs, penalty_runs, batsman_runs, extra_runs, total_runs,
  player_dismissed, dismissal_kind, fielder)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`;
  let values = Object.entries(deliveryObj).reduce((acc, curr) => {
    acc.push(curr[1]);
    return acc;
  }, []);

  return new Promise((resolve, reject) => {
    connection.query(insertQuery, values, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}
async function convertCSvToJson(csvFilePath) {
  try {
    let result;
    const jsonArray = await csvtojson().fromFile(csvFilePath);
    for (const deliveryObj of jsonArray) {
      result = await insertIntoDel(deliveryObj);
    }
    console.log("all Data inserted Successfully");
    console.log(result);
    connection.end();
  } catch (error) {
    throw error;
  }
}

convertCSvToJson(csvFilePath);
