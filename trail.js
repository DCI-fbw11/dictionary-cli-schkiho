const axios = require("axios");

const app_id = "9ebb37a1";
const app_key = "ee9e663167ef7f4cad304ed5dacb56fd";

const client = axios.create({
  baseURL: "https://od-api.oxforddictionaries.com/api/v1/entries/en/",

  headers: {
    Accept: "application/json",
    app_id,
    app_key
  }
});

client.get("hello").then(res => {
  const client_data = res.data;
  let arr = [];
  let output = [];

  //console.log(client_data);
  const provider = client_data.metadata.provider;
  //console.log(provider);
  let data = client_data.results[0].lexicalEntries;
  //console.log(data);

  data.forEach(item => {
    //console.log(item);
    title = `${item.text} (${item.lexicalCategory}) \n`;
    //console.log(title);
    description = `1. ${item.entries[0].senses[0].short_definitions} \n`;
    //console.log(description);

    result = title + description;
    // console.log(result);
    arr.push(result);
  });
  arr.push(provider);
  output = arr.join("\n");
  console.log(output);
});
