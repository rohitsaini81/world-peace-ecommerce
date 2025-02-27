import axios from 'axios';
import express from 'express'
const app = express();
const interval = 4000; // Time interval between requests (in milliseconds)

const targetUrl = 'http://localhost:4000/scrape';

let positiveReq = 0;
let negativeReq = 0;
let serverIssue = 0;

async function sendScrapeRequest() {
    try {
        const response = await axios.post(targetUrl, {
            searchQuery: "condoms",
            minPrice: 0,
            maxPrice: 80000,
            // brand: "HP"
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        console.log('Response:', response.data);
        return response
    } catch (error) {
        return ('Error:', error.response ? error.response.data : error.message);
    }
}




async function checkIpBan() {
    try {
        const response = await sendScrapeRequest();
        console.log(response.data)
        // console.log(`Response: ${response.status} - ${response.statusText}`);
    } catch (error) {
        if (error.response) {
            console.log(`Blocked? Status: ${error.response.status} - ${error.response.statusText}`);
            serverIssue += 1;

        } else {
            negativeReq += 1;
            console.log('Error: Unable to reach server. Possible ban?');
        }
    }
    console.log("count\n Positive : ", positiveReq, " ", "Negative : ", negativeReq, " ", "Server Failure : ", serverIssue)
}

// Run the check in intervals
setInterval(checkIpBan, interval);


app.listen(5000, () => {
    console.log('Local server running on port 5000');
});