import React, {useEffect, useState}  from "react";
import Quote from "./quote";
import Author from "./author";
import Button from "./button";
import Quotes from "./Quotes";
import colors from "./Colors";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faTumblr } from '@fortawesome/free-brands-svg-icons';
import "./App.css";
import { CSSTransition, TransitionGroup } from 'react-transition-group';


const quoteLeftIcon = <FontAwesomeIcon icon={faQuoteLeft} />;
const twitterIcon = <FontAwesomeIcon icon={faTwitter} />;
const tumblrIcon = <FontAwesomeIcon icon={faTumblr} />;

const App = () => {

    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [color, setColor] = useState("");
    const [prevQuote, setPrevQuote] = useState("");
    const [id, setId] = useState("");

    useEffect(() => {
        const num = Math.floor(Math.random() * Quotes.length);
        const colorNum = Math.floor(Math.random() * colors.length);
        setColor(colors[colorNum]);
        setId(num)
        const timeout = setTimeout(() => {
            setQuote(Quotes[num].quote);
            setAuthor(Quotes[num].author);
        })
        return () => clearTimeout(timeout);
    },[]);

    const toggleQuote = () => {
        const num = Math.floor(Math.random() * Quotes.length);
        setQuote(Quotes[num].quote);
        setAuthor(Quotes[num].author);
        setPrevQuote(quote);
        setId(num)
    };

    const toggleColor = () => {
        const colorNum = Math.floor(Math.random() * colors.length);
        setColor(colors[colorNum]);
    };

    const backgroundstyle = {
        backgroundColor : color
    };
    const textStyle = {
        color : color,
    };

    const height1 = {
        height:"150px"
    };
    const height2 = {
        height: "180px"
    };
    const height3 = {
        height: "220px"
    };

    const heightStyle = quote.length < 45
    ? height1
    : quote.length < 93
    ? height2
    : height3
    
    return (
        <div id="quote-machine-wrapper" style={backgroundstyle}>
            <div id="quote-box">
                <div id="quote-author-wrapper" style={heightStyle}>
                    <TransitionGroup>
                        <CSSTransition
                        key={id}
                        appear={true}
                        timeout={4000}
                        classNames="fade"
                        >
                            <div id="quote-author">
                                <div id="quote" style={textStyle}>
                                    <Quote value={prevQuote}>
                                    <span>
                                        {quoteLeftIcon}
                                    </span>
                                        {quote}
                                    </Quote>
                                </div>
                                <div id="author" style={textStyle}>
                                    <Author>
                                        -{author}
                                    </Author>
                                </div>
                                </div>
                        </CSSTransition>
                    </TransitionGroup>
                </div>
                <div id="buttons">
                    <a className="button media" style={backgroundstyle} href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22Ask%20and%20it%20will%20be%20given%20to%20you%3B%20search%2C%20and%20you%20will%20find%3B%20knock%20and%20the%20door%20will%20be%20opened%20for%20you.%22%20Jesus" target="_blank">
                        {twitterIcon}
                    </a>
                    <a className="button media" style={backgroundstyle} href="https://www.tumblr.com/login?redirect_to=https%3A%2F%2Fwww.tumblr.com%2Fwidgets%2Fshare%2Ftool%3Fposttype%3Dquote%26tags%3Dquotes%252Cfreecodecamp%26caption%3DAyn%2BRand%26content%3DThe%2Bquestion%2Bisn%25E2%2580%2599t%2Bwho%2Bis%2Bgoing%2Bto%2Blet%2Bme%253B%2Bit%25E2%2580%2599s%2Bwho%2Bis%2Bgoing%2Bto%2Bstop%2Bme.%26canonicalUrl%3Dhttps%253A%252F%252Fwww.tumblr.com%252Fbuttons%26shareSource%3Dtumblr_share_button" target="_blank">
                        {tumblrIcon}
                    </a>
                    <div id="new-quote" className="button" style={backgroundstyle}>
                        <Button
                        handleClick={() => {
                        toggleQuote()
                        toggleColor()
                        }}
                        >New Quote</Button>
                    </div>
                </div>
                </div>
            <div id="footer">
                by <a href="https://codepen.io/freeCodeCamp/full/qRZeGZ" target="_blank">hezag</a>
            </div>
        </div>
    )
}

export default App;