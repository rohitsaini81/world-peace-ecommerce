import puppeteer from "puppeteer";



let browser, page;
let turn = false;
const startBrowser = async () => {
    if (!turn) {
        browser = await puppeteer.launch({ headless: "new" });
        page = await browser.newPage();
    }

}
async function scrapeGoogleShopping(searchQuery) {
    await startBrowser()
    const url = `https://www.google.com/search?tbm=shop&q=${encodeURIComponent(searchQuery)}`;
    await page.goto(url, { waitUntil: "networkidle2" });

    // Wait for the products to appear
    await page.waitForSelector(".sh-dgr__grid-result", { timeout: 10000 }).catch(() => console.log("No products found"));

    const products = await page.evaluate(() => {
        return [...document.querySelectorAll(".sh-dgr__grid-result")].map(el => ({
            title: el.querySelector(".tAxDx, .sh-np__product-title")?.innerText?.trim() || "No Title",
            price: el.querySelector(".a8Pemb, .sh-pr__price")?.innerText?.trim() || "No Price",
            link: el.querySelector(".shntl, .sh-np__click-target")?.getAttribute("href")
                ? "https://www.google.com" + el.querySelector(".shntl, .sh-np__click-target")?.getAttribute("href")
                : "No Link",
            image: el.querySelector(".ArOc1c img, .sh-div__image img")?.getAttribute("src") || "No Image"
        }));
    });

    console.log(products[1]);

    await browser.close();
    return products;
}

// Example usage
// scrapeGoogleShopping("nice");



export default scrapeGoogleShopping