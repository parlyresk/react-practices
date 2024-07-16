import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {

    const [time, setTime] = useState({
        hours: new Date().getHours(),
        minutes: new Date().getMinutes(),
        seconds: new Date().getSeconds(),
    });

    const [tick,setTick] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            setTime({
                hours: now.getHours(),
                minutes: now.getMinutes(),
                seconds: now.getSeconds(),
            });
            setTick((e) => e + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return(
        tick%10 ==0? null :
            <Clock
                title={`ex05: Clock Component II: ${tick}`}
                hours={time.hours}
                minutes={time.minutes}
                seconds={time.seconds} />

    );    
}