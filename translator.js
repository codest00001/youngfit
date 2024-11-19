require('dotenv').config(); // .env 파일 로드
const TextTranslationClient = require("@azure-rest/ai-translation-text").default;

const apiKey = process.env.API_KEY;
const endpoint = process.env.API_ENDPOINT;
const region = process.env.API_REGION;

async function main() {
  const translateCredential = {
    key: apiKey,
    region,
  };
  // AzureKeyCredential 객체 생성
  // const credential = new AzureKeyCredential(apiKey);

  // 클라이언트 생성
  const translationClient = new TextTranslationClient(endpoint, translateCredential);

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
    console.log(`en_text : '${translation?.translations[0]?.text}'`);
  }
}

main().catch((err) => {
  console.error("An error occurred:", err);
  process.exit(1);
  
});

module.exports = { main };
