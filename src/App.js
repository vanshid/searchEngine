import logo from './logo.svg';
import './App.css';
import React, { useEffect, useContext, useState, useRef } from 'react';
import axios from 'axios';
import ChristmasCarol from './dataSheet/A Christmas Carol in Prose; Being a Ghost Story of Christmas by Charles Dickens.txt';
import DollHouse from './dataSheet/A Dolls house.txt';
import ModestProposal from './dataSheet/A Modest Proposal by Jonathan Swift.txt';
import ATaleOfTwoCities from './dataSheet/A Tale of Two Cities by Charles Dickens.txt';
import AlicesAdventure from './dataSheet/Alices Adventures in Wonderland by Lewis Carroll.txt';
import Anthem from './dataSheet/Anthem by Ayn Rand.txt';
import Beowulf from './dataSheet/Beowulf_ An Anglo-Saxon Epic Poem.txt';
import Dracula from './dataSheet/Dracula by Bram Stoker.txt';
import Frankenstein from './dataSheet/Frankenstein; Or, The Modern Prometheus by Mary Wollstonecraft Shelley.txt';
import Grimms from './dataSheet/Grimms Fairy Tales by Jacob Grimm and Wilhelm Grimm.txt';
import HeartOfDarkness from './dataSheet/Heart of Darkness by Joseph Conrad.txt';
import JaneEye from './dataSheet/Jane Eyre_ An Autobiography by Charlotte Bront.txt';
import Metamorphosis from './dataSheet/Metamorphosis by Franz Kafka.txt';
import MobyDick from './dataSheet/Moby Dick; Or, The Whale by Herman Melville .txt';
import PrideAndPrejudice from './dataSheet/Pride and Prejudice.txt';
import Holmes from './dataSheet/The Adventures of Sherlock Holmes by Arthur Conan Doyle.txt';
import Illiad from './dataSheet/The Iliad by Homer.txt';
import ImportanceBeingEarnest from './dataSheet/The Importance of Being Earnest_ A Trivial Comedy for Serious People by Oscar Wilde.txt';
import SleepyHollow from './dataSheet/The Legend of Sleepy Hollow by Washington Irving.txt';
import ScarletLetter from './dataSheet/The Scarlet Letter by Nathaniel Hawthorne.txt';
import SoulsBlack from './dataSheet/The Souls of Black Folk by W. E. B. Du Bois.txt';
import StrangeCase from './dataSheet/The Strange Case of Dr. Jekyll and Mr. Hyde by Robert Louis Stevenson.txt';
import TheWorks from './dataSheet/The Works of Edgar Allan Poe, The Raven Edition by Edgar Allan Poe.txt';
import YellowWallpaper from './dataSheet/The Yellow Wallpaper by Charlotte Perkins Gilman.txt';
import Walden from './dataSheet/Walden, and On The Duty Of Civil Disobedience by Henry David Thoreau.txt';

import {nlpFunctions as nlp} from './components/helpers/TokenHelpers';

function App() {

  const [doc1, setDoc1] = useState("");
  const [doc2, setDoc2] = useState(""); 
  const [doc3, setDoc3] = useState(""); 
  const [doc4, setDoc4] = useState(""); 
  const [doc5, setDoc5] = useState(""); 
  const [doc6, setDoc6] = useState(""); 
  const [doc7, setDoc7] = useState(""); 
  const [doc8, setDoc8] = useState(""); 
  const [doc9, setDoc9] = useState(""); 
  const [doc10, setDoc10] = useState(""); 
  const [doc11, setDoc11] = useState(""); 
  const [doc12, setDoc12] = useState(""); 
  const [doc13, setDoc13] = useState(""); 
  const [doc14, setDoc14] = useState(""); 
  const [doc15, setDoc15] = useState(""); 
  const [doc16, setDoc16] = useState(""); 
  const [doc17, setDoc17] = useState(""); 
  const [doc18, setDoc18] = useState(""); 
  const [doc19, setDoc19] = useState(""); 
  const [doc20, setDoc20] = useState(""); 
  const [doc21, setDoc21] = useState(""); 
  const [doc22, setDoc22] = useState(""); 
  const [doc23, setDoc23] = useState(""); 
  const [doc24, setDoc24] = useState(""); 
  const [doc25, setDoc25] = useState(""); 

  const [dict,setDict] = useState([]);
  const[idf,setIdf] = useState(null);


  const[d1tdf,setD1tdf] = useState(0);
  const[d2tdf,setD2tdf] = useState(0);
  const[d3tdf,setD3tdf] = useState(0);
  const[d4tdf,setD4tdf] = useState(0);
  const[d5tdf,setD5tdf] = useState(0);
  const[d6tdf,setD6tdf] = useState(0);
  const[d7tdf,setD7tdf] = useState(0);
  const[d8tdf,setD8tdf] = useState(0);
  const[d9tdf,setD9tdf] = useState(0);
  const[d10tdf,setD10tdf] = useState(0);
  const[d11tdf,setD11tdf] = useState(0);
  const[d12tdf,setD12tdf] = useState(0);
  const[d13tdf,setD13tdf] = useState(0);
  const[d14tdf,setD14tdf] = useState(0);
  const[d15tdf,setD15tdf] = useState(0);
  const[d16tdf,setD16tdf] = useState(0);
  const[d17tdf,setD17tdf] = useState(0);
  const[d18tdf,setD18tdf] = useState(0);
  const[d19tdf,setD19tdf] = useState(0);
  const[d20tdf,setD20tdf] = useState(0);
  const[d21tdf,setD21tdf] = useState(0);
  const[d22tdf,setD22tdf] = useState(0);
  const[d23tdf,setD23tdf] = useState(0);
  const[d24tdf,setD24tdf] = useState(0);
  const[d25tdf,setD25tdf] = useState(0);

  const [isLoaded, setIsLoaded] = useState(false);

  const[query, setQuery] = useState('');

  const[result,setResult] = useState([]);
  

  const get_text_file = async (filepath) => {
    const r = await axios.get(filepath);
    const rs =  await r.data;
    return rs;
   };

useEffect(() => {
(async ()=>{
const res = await get_text_file(ChristmasCarol);
const res2 = await get_text_file(DollHouse);
const res3 = await get_text_file(ModestProposal);
const res4 = await get_text_file(ATaleOfTwoCities);
const res5 = await get_text_file(AlicesAdventure);
const res6 = await get_text_file(Anthem);
const res7 = await get_text_file(Beowulf);
const res8 = await get_text_file(Dracula);
const res9 = await get_text_file(Frankenstein);
const res10 = await get_text_file(Grimms);
const res11 = await get_text_file(HeartOfDarkness);
const res12 = await get_text_file(JaneEye);
const res13 = await get_text_file(Metamorphosis);
const res14 = await get_text_file(MobyDick);
const res15 = await get_text_file(PrideAndPrejudice);
const res16 = await get_text_file(Holmes);
const res17 = await get_text_file(Illiad);
const res18 = await get_text_file(ImportanceBeingEarnest);
const res19 = await get_text_file(SleepyHollow);
const res20 = await get_text_file(ScarletLetter);
const res21 = await get_text_file(SoulsBlack);
const res22 = await get_text_file(StrangeCase);
const res23 = await get_text_file(TheWorks);
const res24 = await get_text_file(YellowWallpaper);
const res25 = await get_text_file(Walden);

setDoc1(res);
setDoc2(res2);
setDoc3(res3);
setDoc4(res4);
setDoc5(res5);
setDoc6(res6);
setDoc7(res7);
setDoc8(res8);
setDoc9(res9);
setDoc10(res10);
setDoc11(res11);
setDoc12(res12);
setDoc13(res13);
setDoc14(res14);
setDoc15(res15);
setDoc16(res16);
setDoc17(res17);
setDoc18(res18);
setDoc19(res19);
setDoc20(res20);
setDoc21(res21);
setDoc22(res22);
setDoc23(res23);
setDoc24(res24);
setDoc25(res25);

let dict = [];

let d1Tokens = nlp.tokenize(res);
let d2Tokens = nlp.tokenize(res2);
let d3Tokens = nlp.tokenize(res3);
let d4Tokens = nlp.tokenize(res4);
let d5Tokens = nlp.tokenize(res5);
// let d6Tokens = nlp.tokenize(res6);
// let d7Tokens = nlp.tokenize(res7);
// let d8Tokens = nlp.tokenize(res8);
// let d9Tokens = nlp.tokenize(res9);
// let d10Tokens = nlp.tokenize(res10);
// let d11Tokens = nlp.tokenize(res11);
// let d12Tokens = nlp.tokenize(res12);
// let d13Tokens = nlp.tokenize(res13);
// let d14Tokens = nlp.tokenize(res14);
// let d15Tokens = nlp.tokenize(res15);
// let d16Tokens = nlp.tokenize(res16);
// let d17Tokens = nlp.tokenize(res17);
// let d18Tokens = nlp.tokenize(res18);
// let d19Tokens = nlp.tokenize(res19);
// let d20Tokens = nlp.tokenize(res20);
// let d21Tokens = nlp.tokenize(res21);
// let d22Tokens = nlp.tokenize(res22);
// let d23Tokens = nlp.tokenize(res23);
// let d24Tokens = nlp.tokenize(res24);
// let d25Tokens = nlp.tokenize(res25);


nlp.dictionary(d1Tokens,dict);
nlp.dictionary(d2Tokens,dict);
nlp.dictionary(d3Tokens,dict);
nlp.dictionary(d4Tokens,dict);
nlp.dictionary(d5Tokens,dict);
// nlp.dictionary(d6Tokens,dict);
// nlp.dictionary(d7Tokens,dict);
// nlp.dictionary(d8Tokens,dict);
// nlp.dictionary(d9Tokens,dict);
// nlp.dictionary(d10Tokens,dict);
// nlp.dictionary(d11Tokens,dict);
// nlp.dictionary(d12Tokens,dict);
// nlp.dictionary(d13Tokens,dict);
// nlp.dictionary(d14Tokens,dict);
// nlp.dictionary(d15Tokens,dict);
// nlp.dictionary(d16Tokens,dict);
// nlp.dictionary(d17Tokens,dict);
// nlp.dictionary(d18Tokens,dict);
// nlp.dictionary(d19Tokens,dict);
// nlp.dictionary(d20Tokens,dict);
// nlp.dictionary(d21Tokens,dict);
// nlp.dictionary(d22Tokens,dict);
// nlp.dictionary(d23Tokens,dict);
// nlp.dictionary(d24Tokens,dict);
// nlp.dictionary(d25Tokens,dict);

console.log('hello')

let d1Vsm = nlp.vsm(d1Tokens,dict);
let d2Vsm = nlp.vsm(d2Tokens,dict);
let d3Vsm = nlp.vsm(d3Tokens,dict);
let d4Vsm = nlp.vsm(d4Tokens,dict);
let d5Vsm = nlp.vsm(d5Tokens,dict);
// let d6Vsm = nlp.vsm(d6Tokens,dict);
// let d7Vsm = nlp.vsm(d7Tokens,dict);
// let d8Vsm = nlp.vsm(d8Tokens,dict);
// let d9Vsm = nlp.vsm(d9Tokens,dict);
// let d10Vsm = nlp.vsm(d10Tokens,dict);
// let d11Vsm = nlp.vsm(d11Tokens,dict);
// let d12Vsm = nlp.vsm(d12Tokens,dict);
// let d13Vsm = nlp.vsm(d13Tokens,dict);
// let d14Vsm = nlp.vsm(d14Tokens,dict);
// let d15Vsm = nlp.vsm(d15Tokens,dict);
// let d16Vsm = nlp.vsm(d16Tokens,dict);
// let d17Vsm = nlp.vsm(d17Tokens,dict);
// let d18Vsm = nlp.vsm(d18Tokens,dict);
// let d19Vsm = nlp.vsm(d19Tokens,dict);
// let d20Vsm = nlp.vsm(d20Tokens,dict);
// let d21Vsm = nlp.vsm(d21Tokens,dict);
// let d22Vsm = nlp.vsm(d22Tokens,dict);
// let d23Vsm = nlp.vsm(d23Tokens,dict);
// let d24Vsm = nlp.vsm(d24Tokens,dict);
// let d25Vsm = nlp.vsm(d25Tokens,dict);

let d1tf = nlp.tf(d1Vsm,d1Tokens.length);
let d2tf = nlp.tf(d2Vsm,d2Tokens.length);
let d3tf = nlp.tf(d3Vsm,d3Tokens.length);
let d4tf = nlp.tf(d4Vsm,d4Tokens.length);
let d5tf = nlp.tf(d5Vsm,d5Tokens.length);
// let d6tf = nlp.tf(d6Vsm,d6Tokens.length);
// let d7tf = nlp.tf(d7Vsm,d7Tokens.length);
// let d8tf = nlp.tf(d8Vsm,d8Tokens.length);
// let d9tf = nlp.tf(d9Vsm,d9Tokens.length);
// let d10tf = nlp.tf(d10Vsm,d10Tokens.length);
// let d11tf = nlp.tf(d11Vsm,d11Tokens.length);
// let d12tf = nlp.tf(d12Vsm,d12Tokens.length);
// let d13tf = nlp.tf(d13Vsm,d13Tokens.length);
// let d14tf = nlp.tf(d14Vsm,d14Tokens.length);
// let d15tf = nlp.tf(d15Vsm,d15Tokens.length);
// let d16tf = nlp.tf(d16Vsm,d16Tokens.length);
// let d17tf = nlp.tf(d17Vsm,d17Tokens.length);
// let d18tf = nlp.tf(d18Vsm,d18Tokens.length);
// let d19tf = nlp.tf(d19Vsm,d19Tokens.length);
// let d20tf = nlp.tf(d20Vsm,d20Tokens.length);
// let d21tf = nlp.tf(d21Vsm,d21Tokens.length);
// let d22tf = nlp.tf(d22Vsm,d22Tokens.length);
// let d23tf = nlp.tf(d23Vsm,d23Tokens.length);
// let d24tf = nlp.tf(d24Vsm,d24Tokens.length);
// let d25tf = nlp.tf(d25Vsm,d25Tokens.length);

let idf = nlp.idf([d1Tokens,d2Tokens,d3Tokens,d4Tokens,d5Tokens],dict)

let d1tfidf = nlp.tfidf(d1tf,idf);
let d2tfidf = nlp.tfidf(d2tf,idf);
let d3tfidf = nlp.tfidf(d3tf,idf);
let d4tfidf = nlp.tfidf(d4tf,idf);
let d5tfidf = nlp.tfidf(d5tf,idf);
// let d6tfidf = nlp.tfidf(d6tf,idf);
// let d7tfidf = nlp.tfidf(d7tf,idf);
// let d8tfidf = nlp.tfidf(d8tf,idf);
// let d9tfidf = nlp.tfidf(d9tf,idf);
// let d10tfidf = nlp.tfidf(d10tf,idf);
// let d11tfidf = nlp.tfidf(d11tf,idf);
// let d12tfidf = nlp.tfidf(d12tf,idf);
// let d13tfidf = nlp.tfidf(d13tf,idf);
// let d14tfidf = nlp.tfidf(d14tf,idf);
// let d15tfidf = nlp.tfidf(d15tf,idf);
// let d16tfidf = nlp.tfidf(d16tf,idf);
// let d17tfidf = nlp.tfidf(d17tf,idf);
// let d18tfidf = nlp.tfidf(d18tf,idf);
// let d19tfidf = nlp.tfidf(d19tf,idf);
// let d20tfidf = nlp.tfidf(d20tf,idf);
// let d21tfidf = nlp.tfidf(d21tf,idf);
// let d22tfidf = nlp.tfidf(d22tf,idf);
// let d23tfidf = nlp.tfidf(d23tf,idf);
// let d24tfidf = nlp.tfidf(d24tf,idf);
// let d25tfidf = nlp.tfidf(d25tf,idf);

setDict(dict);
setIdf(idf);

setD1tdf(d1tfidf);
setD2tdf(d2tfidf);
setD3tdf(d3tfidf);
setD4tdf(d4tfidf);
setD5tdf(d5tfidf);
// setD6tdf(d6tfidf);
// setD7tdf(d7tfidf);
// setD8tdf(d8tfidf);
// setD9tdf(d9tfidf);
// setD10tdf(d10tfidf);
// setD11tdf(d11tfidf);
// setD12tdf(d12tfidf);
// setD13tdf(d13tfidf);
// setD14tdf(d14tfidf);
// setD15tdf(d15tfidf);
// setD16tdf(d16tfidf);
// setD17tdf(d17tfidf);
// setD18tdf(d18tfidf);
// setD19tdf(d19tfidf);
// setD20tdf(d20tfidf);
// setD21tdf(d21tfidf);
// setD22tdf(d22tfidf);
// setD23tdf(d23tfidf);
// setD24tdf(d24tfidf);
// setD25tdf(d25tfidf);


setIsLoaded(true);

})();

return()=>{}
  }, []);


const handleGet = (query) =>{

  console.log('helo')

let queryTokens = nlp.tokenize(query)
let queryVsm = nlp.vsm(queryTokens,dict)
let querytf = nlp.tf(queryVsm,queryTokens.length)
let querytfidf = nlp.tfidf(querytf,idf)

let cosineSim1 = nlp.cosine(d1tdf,querytfidf);
let cosineSim2 = nlp.cosine(d2tdf,querytfidf);
let cosineSim3 = nlp.cosine(d3tdf,querytfidf);
let cosineSim4 = nlp.cosine(d4tdf,querytfidf);
let cosineSim5 = nlp.cosine(d5tdf,querytfidf);
// let cosineSim6 = nlp.cosine(d6tdf,querytfidf);
// let cosineSim7 = nlp.cosine(d7tdf,querytfidf);
// let cosineSim8 = nlp.cosine(d8tdf,querytfidf);
// let cosineSim9 = nlp.cosine(d9tdf,querytfidf);
// let cosineSim10 = nlp.cosine(d10tdf,querytfidf);
// let cosineSim11 = nlp.cosine(d11tdf,querytfidf);
// let cosineSim12 = nlp.cosine(d12tdf,querytfidf);
// let cosineSim13 = nlp.cosine(d13tdf,querytfidf);
// let cosineSim14 = nlp.cosine(d14tdf,querytfidf);
// let cosineSim15 = nlp.cosine(d15tdf,querytfidf);
// let cosineSim16 = nlp.cosine(d16tdf,querytfidf);
// let cosineSim17 = nlp.cosine(d17tdf,querytfidf);
// let cosineSim18 = nlp.cosine(d18tdf,querytfidf);
// let cosineSim19 = nlp.cosine(d19tdf,querytfidf);
// let cosineSim20 = nlp.cosine(d20tdf,querytfidf);
// let cosineSim21 = nlp.cosine(d21tdf,querytfidf);
// let cosineSim22 = nlp.cosine(d22tdf,querytfidf);
// let cosineSim23 = nlp.cosine(d23tdf,querytfidf);
// let cosineSim24 = nlp.cosine(d24tdf,querytfidf);
// let cosineSim25 = nlp.cosine(d25tdf,querytfidf);

console.log(cosineSim1,cosineSim2,cosineSim3,cosineSim4,cosineSim5);

let result = [];
result.push({doc:doc1,relevance:cosineSim1});
result.push({doc:doc2,relevance:cosineSim2});
result.push({doc:doc3,relevance:cosineSim3});
result.push({doc:doc4,relevance:cosineSim4});
result.push({doc:doc5,relevance:cosineSim5});
// result.push({doc:doc6,relevance:cosineSim6});

result.sort(function (a, b) {  return b.relevance- a.relevance;  });

console.log(result);

setResult(result);


  }

  const textStyle = {
    maxWidth: '50%',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 10,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginBottom:'15px',
    border:'1px solid grey'
  };

  return (
    <div>
    {!isLoaded &&
    <h1>Please wait Datasheet getting loaded</h1>}
   {isLoaded && (
<>
<input type="text" value={query} onChange={(e)=>{setQuery(e.target.value)}}></input>
  <input type="submit" onClick={()=>{handleGet(query)}}></input>

</>
   )}


  {result.length>0 && result.map((res)=>(
    <div key={res.doc} style={textStyle}>
      {res.doc}
    </div>
  ))}
   
    </div>
  );
}

export default App;
