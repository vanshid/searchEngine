export const nlpFunctions={
    tokenize:(text)=>text.toLowerCase().split(/\s+/g),
	dictionary:(tokens,dict)=>{
					    tokens.forEach((token)=>{
						    if(!dict.includes(token)){
						        dict.push(token)
						    }
						})
						return dict
					},
	vsm:(tokens,dict)=>dict.map((token)=>tokens.reduce((acc,curr)=>curr === token?acc +1:acc,0)),
	tf:(vsm,numberOfTokens)=>vsm.map((token)=>token/numberOfTokens),
	idf:(documentTokens,dict)=>dict.map((word)=>Math.log(documentTokens.length/documentTokens.reduce((acc,curr)=>curr.includes(word)?1:0+acc,0))),
	tfidf:(tf,idf)=>tf.map((element,index)=>element*idf[index]),
	cosine:(tfIdf1,tfIdf2)=>tfIdf1.reduce((acc,curr,index)=>acc+curr*tfIdf2[index],0) / (Math.sqrt(tfIdf1.reduce((acc,curr)=>acc+curr*curr,0))*Math.sqrt(tfIdf2.reduce((acc,curr)=>acc+curr*curr,0)))
}



export default null;