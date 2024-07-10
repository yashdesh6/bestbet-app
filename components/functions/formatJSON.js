const formatJSON = (json) => {
  // Function to convert a string to title case
  const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  // Function to remove underscores and title-case team names
  const formatName = (str) => {
    return toTitleCase(str.replace(/_/g, " "));
  };

  // Function to process the new JSON structure
  const playerData = json.response.player_data.response.content;
  const suggestion = json.response.response.content;
  const betNumber = json.response.bet_number[0];
  const facts = [
    "Pokem ipsum dolor sit amet Croconaw Baltoy Bug Linoone...",
    "Mineral Badge Dugtrio Dragon Rage Manectric Jumpluff Abomasnow...",
    "Pika-pi Thundershock Parasect deserunt mollit Leech Seed...",
  ];

  return {
    playerName: formatName(playerData.Player),
    playerDescription: `Position: ${playerData.Position} | Team: ${formatName(
      playerData.Team
    )}`,
    userBet: "Lorem ipsum dolores sit amet adipiscing elit",
    betRating: json.response.over_under_analysis,
    suggestion: suggestion,
    playerFacts: facts,
    threshold: betNumber,
    playerImage: playerData.Player_pic,
    teamLogo: playerData.Team_logo,
    teamBackground: playerData.Team_backgroun
  };
};

export default formatJSON;
