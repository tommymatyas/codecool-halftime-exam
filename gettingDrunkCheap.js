function gettingDrunkCheap(drinks) {
  let toGetDrunkTheCheapest = "";

  drinks.forEach((drink) => {
    const pricePerAbv = Math.floor(drink.price / drink.volume / drink.abv);
    drink.pricePerAbv = pricePerAbv;

    if (
      !toGetDrunkTheCheapest ||
      pricePerAbv < toGetDrunkTheCheapest.pricePerAbv
    ) {
      toGetDrunkTheCheapest = { name: drink.name, pricePerAbv: pricePerAbv };
    }
  });

  return toGetDrunkTheCheapest;
}

module.exports = gettingDrunkCheap;
