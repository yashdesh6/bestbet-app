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

  const playerData = json.response.player_data.response.content;

  return {
    playerData: playerData,
    playerName: formatName(playerData.Player),
    playerDescription: `Position: ${playerData.Position} | Team: ${formatName(
      playerData.Team
    )}`,
    userBet: json.response.user_prompt,
    betRating: json.response.over_under_analysis,
    suggestion: json.response.response,
    playerFacts: json.response.insights,
    threshold: json.response.bet_number,
    playerImage: playerData.Player_pic,
    teamLogo: playerData.Team_logo,
    teamBackground: playerData.Team_background,
    team1: null,
    team2: null,
    betType: json.response.graph_key
  };
};

export default formatJSON;
