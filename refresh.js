const { google } = require("googleapis");
require("dotenv").config();

const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

const getTokens = async () => {
  const res = await oauth2Client.getToken(
    "4/0AWgavdeNO3DJ6RiEQFEYAcGo4eainzK_9Q6FZHiA42YziPf8NpOxLmxrns1UMi2gtiuTUQ"
  );
  console.log(res.tokens);
};

getTokens();
