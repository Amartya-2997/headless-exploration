async function processArticle(link,axios,cheerio){
    console.log('fetching data for '+link);
    const articleResponse = await axios.get(link);
    const articleHtmlData = cheerio.load(articleResponse.data);
    const articleContent = articleHtmlData(".content-html").html();

    const data=`<h1><a href=\"${link}\">${articleHtmlData("title").text()}</a></h1>`+articleContent;

    console.log("finsished fetching data for "+link);
    return data;
}

module.exports={
    processArticle:processArticle
}