import axios from "axios"

export const getAchievements = async () => {
   const response = await axios.get("https://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v2/?gameid=367520");
   console.log(response);
   console.log(response.data)
   return response.data;
}