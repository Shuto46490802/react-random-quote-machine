import React, {useEffect, useState} from "react";
import QuoteAndAuthor from "./QuoteAndAuthor";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faTumblr } from '@fortawesome/free-brands-svg-icons';
import quotes from "./Quotes";
import "./App.css";
import colors from "./Colors";


var twitter = <FontAwesomeIcon icon={faTwitter} />
var tumblr = <FontAwesomeIcon icon={faTumblr} />

const App = () => {

    const colorNum = Math.floor(Math.random() * colors.length);
    const num = Math.floor(Math.random() * quotes.length);

    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [color, setColor] = useState(colors[colorNum]);
    const [id, setId] = useState(num);
    const [height, setHeight] = useState("");
    const [top, setTop] = useState("");
    const [bottom, setBottom] = useState("");


    useEffect(() => {
        var timeout = setTimeout(() => {
            setQuote(quotes[num].quote)
            setAuthor(quotes[num].author)
        },2200)
        return () => {
            clearTimeout(timeout)
        }
    },[])

    useEffect(() => {
        var boxHeight = quote.length -1
        if(boxHeight <= 35){
            setHeight("225px");
            setTop("10%");
            setBottom("10%")
        }else if(boxHeight >35 && boxHeight <= 70){
            setHeight("230px");
            setTop("10%");
            setBottom("10%");
        }else if(boxHeight > 70){
            setHeight("265px");
            setTop("13%");
            setBottom("10%");
        }
    })

    const backgroundStyle = {
        backgroundColor : color
    };
    const textStyle = {
        color : color
    }    
    const boxHeight = {
        height : height
    }
    const topStyle = {
        top : top
    }
    const buttonStyle = {
        bottom : bottom
    }

    

    return(
            <div id="wrapper" style={backgroundStyle}>
                <div id="quote-box" style={boxHeight}>
                    <QuoteAndAuthor 
                    quote={quote}
                    author={author}
                    textStyle={textStyle}
                    id={id}
                    topStyle={topStyle}
                    />
                    <div id="buttons" style={buttonStyle}>
                        <a class="brand button" style={backgroundStyle} href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22If%20you%E2%80%99re%20offered%20a%20seat%20on%20a%20rocket%20ship%2C%20don%E2%80%99t%20ask%20what%20seat!%20Just%20get%20on.%22%20Sheryl%20Sandberg" target="_blank">{twitter}</a>
                        <a class="brand button" style={backgroundStyle} href="https://www.tumblr.com/login?redirect_to=https%3A%2F%2Fwww.tumblr.com%2Fwidgets%2Fshare%2Ftool%3Fposttype%3Dquote%26tags%3Dquotes%252Cfreecodecamp%26caption%3DJohn%2BLennon%26content%3DLife%2Bis%2Bwhat%2Bhappens%2Bto%2Byou%2Bwhile%2Byou%25E2%2580%2599re%2Bbusy%2Bmaking%2Bother%2Bplans.%26canonicalUrl%3Dhttps%253A%252F%252Fwww.tumblr.com%252Fbuttons%26shareSource%3Dtumblr_share_button" target="_blank">{tumblr}</a>
                        <button
                        class="button"
                        id="new-quote"
                        style={backgroundStyle}
                        onClick={() => {
                            var num = Math.floor(Math.random() * quotes.length);
                            var colorNum = Math.floor(Math.random() * colors.length)
                            setQuote(quotes[num].quote)
                            setAuthor(quotes[num].author)
                            setColor(colors[colorNum])
                            setId(num)
                        }}
                        >New Quote</button>
                    </div>
                </div>
                <div id="footer">by <a href="https://codepen.io/freeCodeCamp/full/qRZeGZ" target="_blank">hezag</a></div>
            </div> 
    ) 
}

export default App;