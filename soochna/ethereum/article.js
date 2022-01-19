
import web3 from "./web3";
import Article from "./build/Article.json";

const article = new web3.eth.Contract(JSON.parse(Article.interface), "add deployed address");
;
export default article;
