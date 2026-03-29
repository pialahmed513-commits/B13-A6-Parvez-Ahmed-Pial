import React, { use } from 'react';


const Cards = ({cardPromice}) => {
    console.log(cardPromice);
    const data = use(cardPromice)
    console.log(data);
    console.log(data);
    return (
        <div>
            card : {data.length}
        </div>
    );
};

export default Cards;