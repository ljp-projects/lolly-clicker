const story: HTMLElement | null = document.getElementById("story")

let lollies: number = 0;
const lollyButton: HTMLElement | null = document.getElementById("lButton")
const lollyCount: HTMLElement | null = document.getElementById("lollies")

let clickPower: number = 1;
let increment: number = 1.3;

const passiveLollyCount: HTMLElement | null = document.getElementById("lolliesPSec")
let passiveLollies: number = 0;

const gSnakeButton: HTMLElement | null = document.getElementById("gSnake")
const gSnakeCost: HTMLElement | null = document.getElementById("gSnake-price")
let gSnakeCount: HTMLElement | null = document.getElementById("gSnake-count")
let gSnakesOwned: number = 0;
let gSnakeRate: number = 0.2;
let gSnakePrice: number = 10;

const hmLollyButton: HTMLElement | null = document.getElementById("hmLolly")
const hmLollyCost: HTMLElement | null = document.getElementById("hmLolly-price")
let hmLollyCount: HTMLElement | null = document.getElementById("hmLolly-count")
let hmLolliesOwned: number = 0;
let hmLollyRate: number = 3;
let hmLollyPrice: number = 100;

const lollyArtistButton: HTMLElement | null = document.getElementById("lollyArtist")
const lollyArtistCost: HTMLElement | null = document.getElementById("lollyArtist-price")
let lollyArtistCount: HTMLElement | null = document.getElementById("lollyArtist-count")
let lollyArtistsOwned: number = 0;
let lollyArtistRate: number = 17.5;
let lollyArtistPrice: number = 750;

const facButton: HTMLElement | null = document.getElementById("fac")
const facCost: HTMLElement | null = document.getElementById("fac-price")
let facCount: HTMLElement | null = document.getElementById("fac-count")
let facsOwned: number = 0;
let facRate: number = 175;
let facPrice: number = 5000;

const sugarButton: HTMLElement | null = document.getElementById("sugar")
let sugarPrice: number = 1000;

const fakeSugarButton: HTMLElement | null = document.getElementById("fakeSugar")
let fakeSugarPrice: number = 1000;

const betterMouseButton: HTMLElement | null = document.getElementById("betterMouse")
let betterMousePrice: number = 15000;

lollyButton?.addEventListener("click", () => {
  if (lollyCount == null) {
    console.log("Lolly Count is null")
  } else {
    lollies += clickPower;
    lollyCount.textContent = String(lollies);
  }
});

function buygSnake() {
  if (gSnakeCost == null || lollyCount == null || passiveLollyCount == null || gSnakeCount == null) {
    return
  }
  if (lollies >= gSnakePrice) {
    console.log("Sufficient lollies")
    gSnakesOwned++
    lollies -= gSnakePrice;
    gSnakePrice *= increment;
    passiveLollies += gSnakeRate;
    gSnakeCost.textContent = gSnakePrice.toFixed(1);
    lollyCount.textContent = lollies.toFixed(1);
    passiveLollyCount.textContent = passiveLollies.toFixed(1);
    gSnakeCount.textContent = String(gSnakesOwned);
  }
}

function buyHmLolly() {
  if (hmLollyCost == null || lollyCount == null || passiveLollyCount == null || hmLollyCount == null) {
    return
  }
  if (lollies >= hmLollyPrice) {
    console.log("Sufficient lollies")
    hmLolliesOwned++
    lollies -= hmLollyPrice;
    hmLollyPrice *= increment;
    passiveLollies += hmLollyRate;
    hmLollyCost.textContent = hmLollyPrice.toFixed(1);
    lollyCount.textContent = lollies.toFixed(1);
    passiveLollyCount.textContent = passiveLollies.toFixed(1);
    hmLollyCount.textContent = String(hmLolliesOwned);
  }
}

function buyLollyArtist() {
  if (lollyArtistCost == null || lollyCount == null || passiveLollyCount == null || lollyArtistCount == null) {
    return
  }
  if (lollies >= lollyArtistPrice) {
    console.log("Sufficient lollies")
    lollyArtistsOwned++
    lollies -= lollyArtistPrice;
    lollyArtistPrice *= increment;
    passiveLollies += lollyArtistRate;
    lollyArtistCost.textContent = lollyArtistPrice.toFixed(1);
    lollyCount.textContent = lollies.toFixed(1);
    passiveLollyCount.textContent = passiveLollies.toFixed(1);
    lollyArtistCount.textContent = String(lollyArtistsOwned);
  }
}

function buyFac() {
  if (facCost == null || lollyCount == null || passiveLollyCount == null || facCount == null) {
    return
  }
  if (lollies >= facPrice) {
    console.log("Sufficient lollies")
    facsOwned++
    lollies -= facPrice;
    facPrice *= increment;
    passiveLollies += facRate;
    facCost.textContent = facPrice.toFixed(1);
    lollyCount.textContent = lollies.toFixed(1);
    passiveLollyCount.textContent = passiveLollies.toFixed(1);
    facCount.textContent = String(facsOwned);
  }
}

function buySugar() {
  if (lollyCount == null || passiveLollyCount == null || sugarButton == null) {
    return
  }
  if (lollies >= sugarPrice) {
    console.log("Sufficient lollies")
    lollies -= sugarPrice;
    passiveLollies += 50;
    lollyCount.textContent = lollies.toFixed(1);
    sugarButton.style.display = "none"
  }
}

function buyFakeSugar() {
  if (lollyCount == null || passiveLollyCount == null || fakeSugarButton == null || hmLollyCount == null || hmLollyCost == null) {
    return
  }
  if (lollies >= sugarPrice) {
    console.log("Sufficient lollies")
    lollies -= sugarPrice;
    passiveLollies += 50;
    for (let i = 0; i <= 2; i++) {
      console.log("Sufficient lollies")
      hmLolliesOwned++
      lollies -= hmLollyPrice;
      hmLollyPrice *= increment;
      passiveLollies += hmLollyRate;
      hmLollyCost.textContent = hmLollyPrice.toFixed(1);
      lollyCount.textContent = lollies.toFixed(1);
      passiveLollyCount.textContent = passiveLollies.toFixed(1);
      hmLollyCount.textContent = String(hmLolliesOwned);
    }
    lollyCount.textContent = lollies.toFixed(1);
    fakeSugarButton.style.display = "none"
  }
}

function buyBetterMouse() {
  if (lollyCount == null || passiveLollyCount == null || betterMouseButton == null) {
    return
  }
  if (lollies >= sugarPrice) {
    console.log("Sufficient lollies")
    lollies -= sugarPrice;
    clickPower = 20;
    lollyCount.textContent = lollies.toFixed(1);
    betterMouseButton.style.display = "none"
  }
}

gSnakeButton?.addEventListener("click", buygSnake)
hmLollyButton?.addEventListener("click", buyHmLolly)
lollyArtistButton?.addEventListener("click", buyLollyArtist)
facButton?.addEventListener("click", buyFac)

sugarButton?.addEventListener("click", buySugar)
fakeSugarButton?.addEventListener("click", buyFakeSugar)
betterMouseButton?.addEventListener("click", buyBetterMouse)


setInterval(() => {
  if (lollyCount == null) {
    console.log("Lolly Count is null")
  } else {
    lollies += passiveLollies;
    lollyCount.textContent = lollies.toFixed(1);
  }
}, 1000);

setInterval(() => {
  if (lollies < 100 && story != null) {
    const stories: string[] = [
      "You decide to start making lollies.",
      "You offer your family some of your lollies. They leave without a response.",
      "Your first batch goes straight into the bin. Not even flies go near it."
    ]
    story.textContent = stories[Math.floor(Math.random() * stories.length)]
  } else if (lollies < 500 && lollies > 100 && story != null) {
    const stories: string[] = [
      "You start selling lollies to your neighbour. You suspect he is giving them to his cats.",
      "You offer your family some of your lollies. They decide to try one.",
      "You think your friends are selling your lollies on eBay."
    ]
    story.textContent = stories[Math.floor(Math.random() * stories.length)]
  } else if (lollies < 10000 && lollies > 500 && story != null) {
    const stories: string[] = [
      "Your lollies are getting popular in your town.",
      "Your family now asks for lollies because they say they taste good.",
      "Your friends are making mysterious profits. Maybe they did sell your lollies..."
    ]
    story.textContent = stories[Math.floor(Math.random() * stories.length)]
  } else if (lollies > 10000 && story != null) {
    const stories: string[] = [
      "People come from far away to get a taste of your lollies.",
      "You decided to put one of your lollies up for auction. Someone bidded $43 000 for one.",
      "There is a museum with your first ever lolly. It isn't popular, but it is there. You go every day."
    ]
    story.textContent = stories[Math.floor(Math.random() * stories.length)]
  }
}, 10000);