import './style.css';
import React from 'react';
import { ICON } from '../../assets/images';

export const ThreeColumnCard: React.FunctionComponent = () => {
    return (
        <div className={'three-column-card'}>
            <div className="column sedans">
                <img src={ICON.SEDANS} alt="icon-sedans" />
                <h3>Sedans</h3>
                <p className="content">
                    Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or
                    on your next road trip.
                </p>
                <a href="" className="button">
                    Learn More
                </a>
            </div>
            <div className="column suvs">
                <img src={ICON.SUVS} alt="icon-suvs" />
                <h3>SUVS</h3>
                <p className="content">
                    Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation
                    and off-road adventures.
                </p>
                <a href="" className="button">
                    Learn More
                </a>
            </div>
            <div className="column luxury">
                <img src={ICON.LUXURY} alt="icon-luxury" />
                <h3>Luxury</h3>
                <p className="content">
                    Cruise in the best car brands without the bloated prices. Enjoy the enhanced comport of a luxury
                    rental and arrive in style.
                </p>
                <a href="" className="button">
                    Learn More
                </a>
            </div>
        </div>
    );
};
