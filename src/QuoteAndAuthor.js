import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import "./QuoteAndAuthor.css";
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import "./App.css"

var quoteLeft = <FontAwesomeIcon icon={faQuoteLeft} />

const QuoteAndAuthor = (props) => {
    return(
        <TransitionGroup>
            <CSSTransition
            key={props.id}
            timeout={{
                enter:2000,
                exit:2000
            }}
            classNames="fade"
            >
                <div id="quote-and-author" style={props.topStyles}>
                    <h1 style={props.textStyle} id="quote">{quoteLeft} {props.quote}</h1>
                    <p style={props.textStyle} id="author">-{props.author}</p>
                </div>
            </CSSTransition>
        </TransitionGroup>
    )
}

export default QuoteAndAuthor;