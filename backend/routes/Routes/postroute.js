import express from 'express'
const routerp = express.Router();
import axios from 'axios'
import * as cheerio from 'cheerio';
import scrapeGoogleShopping from './Methods.js';
// import { Actor } from "apify";

routerp.post("/scrape", async (req, res) => {
    try {
        const { searchQuery, minPrice, maxPrice, brand } = req.body;
        console.log(req.body)
        console.log(`Scraping Google Shopping for: ${searchQuery}`);


        // Construct Google Shopping search URL
        // const url = `https://www.google.com/search?tbm=shop&q=${encodeURIComponent(searchQuery)}`;
        const url = `https://www.google.com/search?tbm=shop&q=${searchQuery}&tbs=mr:1,price:1,ppr_min:${minPrice},ppr_max:${maxPrice}`

        console.log("uri : ", url)
        const _data = await scrapeGoogleShopping(url)

        // console.log(_data," by pupet")

        res.json({ status: "success", _data });
    } catch (error) {
        console.error("Error during scraping:", error);
        res.status(500).json({ status: "error", message: error.message });
    }
});



routerp.get("/scrape/:searchQuery", async (req, res) => {
    await console.log("before process : "+new Date().toLocaleTimeString());

    try {
        const searchQuery = req.params.searchQuery;
        console.log(`Scraping Google Shopping for: ${searchQuery}`);
        const url = `https://www.google.com/search?tbm=shop&q=${encodeURIComponent(searchQuery)}`;
        console.log("uri : ", url)
        await console.log("before process start : "+new Date().toLocaleTimeString());

        const _data = await scrapeGoogleShopping(url)

        // console.log(_data," by pupet")
        await console.log("after process : "+new Date().toLocaleTimeString());
        res.json({ status: "success", _data });
    } catch (error) {
        console.error("Error during scraping:", error);
        res.status(500).json({ status: "error", message: error.message });
    }
});


export default routerp;