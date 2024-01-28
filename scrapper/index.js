const axios = require('axios');
const cheerio = require('cheerio');
const util = require("./pdf-generator");
const articleProcessor = require("./article-processor");

// List of URLs to fetch
// const urls = [
//   'https://dzone.com/cloud-architecture/5'  // Add more URLs as needed
// ];

const urls=Array.from({length:20},(_,index)=> 'https://dzone.com/cloud-architecture/'+(index+1));



function findArticleLinks($) {
  const list = $('.article-title');
  const result = []
  for (const key in list) {
    if (key != null && list[key].attribs?.href !=null) {
      result.push("https://dzone.com" + list[key].attribs?.href);
    }

  }
  return result;
}

// Function to fetch and parse HTML for each URL
async function processUrls() {
  let allArticleList=[];

  for (const url of urls) {
    try {
      // Make HTTP request
      const response = await axios.get(url);

      // Parse HTML using Cheerio
      const $ = cheerio.load(response.data);
      const links = findArticleLinks($);

      links.forEach((element, _) => {
       articleProcessor.processArticle(element, axios, cheerio)
        .then((article)=>allArticleList.push(article));
        //util.generatePDF(article);
      
      });

    } catch (error) {
      console.error(`Error fetching or parsing ${url}: ${error.message}`);
    }
  }
  const finalList=allArticleList.join("\n");
  util.generatePDF(finalList);
}

// Call the function to process URLs
processUrls();
