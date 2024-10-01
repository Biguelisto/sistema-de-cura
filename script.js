let healthBar = 15;
const HPPotionHeal = 5;
const maxHP = 32;
const potionsBag = [{ name: "HPPotion" }, { name: "RGPotion" }];
while (true) {
  console.log("");
  const select = prompt(
    "Seu HP é igual a: " +
      healthBar +
      "/" +
      maxHP +
      ", digite o nome da poção que você quer consumir: " +
      potionsBag[1].name +
      " / " +
      potionsBag[0].name
  ).toLowerCase();

  if (healthBar >= maxHP) {
    healthBar = maxHP;
    console.log("SEU HP JÁ ESTÁ CHEIO!");
    continue;
  }

  switch (select) {
    case "hppotion":
      console.log("Seu HP é igual a: " + healthBar + "/" + maxHP);
      console.log("Você consumiu a Poção: " + potionsBag[0].name);
      healthBar = healthBar + HPPotionHeal;

      if (healthBar > maxHP) {
        healthBar = maxHP;
        console.log("Seu HP foi MAXIMIZADO!");
      } else {
        console.log("Você Recuperou: " + HPPotionHeal + "HP...");
      }
      console.log("Agora, seu HP é igual a: " + healthBar + "/" + maxHP);
      break;

    case "rgpotion":
      console.log("Seu HP é igual a: " + healthBar + "/" + maxHP);
      console.log("Você consumiu a Poção: " + potionsBag[1].name);

      for (let RGPotionHeal = 0; RGPotionHeal < 5; RGPotionHeal++) {
        if (healthBar < maxHP) {
          healthBar++;
          console.log("Você recuperou 1HP...");
        }
      }
      if (healthBar === maxHP) {
        console.log("Seu HP foi MAXIMIZADO!");
      }
      console.log("Agora, seu HP é igual a: " + healthBar + "/" + maxHP);
      break;

    default:
      console.log("Você não tem essa poção.");
  }
}