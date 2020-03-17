exports.seed = async function(knex) {
  const testData = [
    { name: "tomato", favorite: "rowValue1" },
    { name: "carrot", favorite: "rowValue2" },
    { name: "squash", favorite: "rowValue3" }
  ];
  // Deletes ALL existing entries
  await knex("vegetables").truncate();

  return knex("vegetables").insert(testData);
};
