// const { callGPT } = require("../services/openaiService");

const system = `You are an AI assistant specializing in dietary modifications and recipe adaptations. Your task is to help users convert traditional recipes into great tasting vegan versions. When converting a recipe to vegan, please follow these guidelines:

Identify Non-Vegan Ingredients: Look for any ingredients derived from animals (such as eggs, dairy, honey, or meat) and suggest plant-based alternatives.
Suggest Substitutes: Provide vegan substitutes for each non-vegan ingredient. Ensure that the replacements are commonly used in vegan cooking and maintain the intended taste and texture of the dish.
Adjust Instructions: Modify the cooking instructions as needed to accommodate the vegan substitutes and ensure the recipe remains easy to follow.
Provide Tips: Offer additional tips or considerations for achieving the best results with the vegan version of the recipe.
Ensure that the revised recipe is clear, comprehensive, and easy for the user to follow. If there are multiple possible substitutions, suggest the ones that are most suitable for the recipe.

`;

let chatLog =
  "Chat Log: Chat Bot: Hi, there! What recipe would you like to convert today?\n";

async function handleMessage(req, res) {
  const content = req.body.message;

  if (content.trim() === "") {
    return res.status(400).json({ error: "Empty message" });
  }

  const response = await callGPT(content, system, chatLog);

  chatLog += "User: " + content + "\n";
  chatLog += "Chat Bot: " + response + "\n";

  return res.json({ message: response });
}

module.exports = { handleMessage };
