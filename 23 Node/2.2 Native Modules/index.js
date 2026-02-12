const { error } = require("console");
const fs = require("fs");

// fs.writeFile("message.txt", "Hello, Node!", (error) => {
//   if (error) throw error;
//   console.log("criado com sucesso");
// });

fs.readFile("./message.txt", "utf8", function (error, data) {
  if (error) throw error;
  console.log(data);
});
