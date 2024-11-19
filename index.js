const TextTranslationClient = require("@azure-rest/ai-translation-text").default

const apiKey = "8jI2YzhUrY3yLDTTrFwF1Bwow1tRrME7QYl66UwZHIipoq0pZojuJQQJ99AKACNns7RXJ3w3AAAbACOGew1E";
const endpoint = "https://api.cognitive.microsofttranslator.com/";
const region = "koreacentral";

async function main() {

  const translateCredential = {
    key: apiKey,
    region,
  };
  const translationClient = new TextTranslationClient(endpoint,translateCredential);

  const inputText = [{ text: "저는 서울에 살아요" }];
  const translateResponse = await translationClient.path("/translate").post({
    body: inputText,
    queryParameters: {
      to: "en",
      from: "ko",
    },
  });

  const translations = translateResponse.body;
  for (const translation of translations) {
    console.log(
      `en_text : '${translation?.translations[0]?.text}'.`
    );
  }
}

main().catch((err) => {
    console.error("An error occurred:", err);
    process.exit(1);
  });

  module.exports = { main };