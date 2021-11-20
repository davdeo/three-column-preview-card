import React from 'react';
import './style.css';
import { ThreeColumnCard } from '../three-column-card';

export default function App() {
    return (
        <div className={'app'}>
            <div className="upper-space" />
            <ThreeColumnCard />
            <div className="lower-space" />
        </div>
    );
}
