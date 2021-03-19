import React, { Component } from 'react';
import ServiceCard from './ServiceCard';

class Service extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Our services',
            desc: 'We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health',
            card: [
                {id: '1', head: 'Search doctor', body: 'Choose your doctor from thousands of specialist, general, and trusted hospitals'},
                {id: '2', head: 'Online pharmacy', body: 'Buy  your medicines with our mobile application with a simple delivery system'},
                {id: '3', head: 'Consultation', body: 'Free consultation with our trusted doctors a get the best recomendations'},
                {id: '4', head: 'Details info', body: 'Free consultation with our trusted doctors and get the best recomendations'},
                {id: '5', head: 'Emergency care', body: 'You can get 24/7 urgent care for yourself or your children and your lovely family'},
                {id: '6', head: 'Tracking', body: 'Track and save your medical history and health data '}
            ]
        }
    }

    render() {

        return (
            <div className="Service">
                <div className="ServiceHeader">
                    <h1>
                        {this.state.title}
                    </h1>
                    <div className="line"></div>
                    <p>
                        {this.state.desc}
                    </p>
                </div>

                <ServiceCard
                    data = {this.state.card}
                >
                </ServiceCard>
            </div>
        );
    }
}

export default Service;