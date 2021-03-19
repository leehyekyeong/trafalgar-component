import React, { Component } from 'react';
import './Service.css';
import no1 from './assets/search-doctor.png';
// import no2 from './assets/online-pharmacy.svg';

class ServiceCard extends Component {

    render() {
        var cardList = [];
        var cardData = this.props.data;
        var i = 0;
        while (i < cardData.length) {
            cardList.push (
                <li className="ServiceCard" key={cardData[i].id}>
                    <div className="ServiceCardImg">
                        <img
                            src={no1}
                            alt="img in each service-card">
                        </img>
                    </div>
                    <div className="ServiceCardTxt">
                        <h1>
                            {cardData[i].head}
                        </h1>
                        <p>
                            {cardData[i].body}
                        </p>
                    </div>
                </li>
            );
            i = i + 1;
        }

        return (
            <div className="ServiceCards">
                {cardList}
            </div>
        );
    }
}

export default ServiceCard;