import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';

import Homepage from './components/Homepage/Homepage';
import Statistics from './components/Statistics/Statistic';
import Standings from './components/Standings/Standings';
import Schedule from './components/Schedule/Schedule';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Events from './components/Events/Events';
import Video from './components/Video/Video';
import Join from './components/Join/Join';
import News from './components/News/News';
import Rules from './components/Rules/Rules';
import Vods from './components/Vods/Vods';

ReactDOM.render(
    <BrowserRouter>
    <div>
        <Switch>
            <Route path="/statistics" component={Statistics} />
            <Route path="/standings" component={Standings} />
            <Route path="/schedule" component={Schedule} />
            <Route path="/events" component={Events} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/video" component={Video} />
            <Route path="/joinegf" component={Join} />
            <Route path="/news" component={News} />
            <Route path="/rules" component={Rules} />
            <Route path="/vods" component={Vods} />
            <Route path="/" component={Homepage} />
        </Switch>
    </div>
    </BrowserRouter>
, document.getElementById('root'));