import React from 'react';

const QuoteCard = ({changeB,phrasesData}) => {

    const fondos = [ './cookie-1.jpg', './cookie-2.jpg', './cookie-3.png', './cookie-4.png']

    return (
        <div className='quote-card'>
            <picture>
                <img src={fondos[Math.floor(changeB /4)]} alt="background image" />
            </picture>
            <div>
                <p><i className='bx bxs-quote-alt-left'></i>    {phrasesData.phrase} <i className='bx bxs-quote-alt-right' ></i></p>
                <i className='bx bxl-react'></i>
                <div></div>
                <span></span>
            </div>
        </div>
    );
};

export default QuoteCard;