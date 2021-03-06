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
import RulesAndCodeOfConduct from './components/RulesAndCodeOfConduct/RulesAndCodeOfConduct';
import Vods from './components/Vods/Vods';
import SchoolProfile from './components/SchoolProfile/SchoolProfile';
import UserProfile from './components/UserProfile/UserProfile';
import Bracket from './components/Bracket/Bracket';
import CompetitionForm from './components/Competition/CompetitionForm';
import Tournament from './components/Tournaments/Tournament';
import Verified from './components/Verified/Verified';

ReactDOM.render(
    <BrowserRouter>
    <div>
        <Switch>
            <Route path="/verified" component={Verified} />
            <Route path="/competitionform" component={CompetitionForm} />
            <Route path="/bracket" component={Bracket} />
            <Route path="/tournaments" component={Tournament} />
            <Route path="/userprofiletest" component={UserProfile} />
            <Route path="/statistics" component={Statistics} />
            <Route path="/standings" component={Standings} />
            <Route path="/schedule" component={Schedule} />
            <Route path="/events" component={Events} />
            <Route path="/contact" component={Contact} />
            <Route path="/schoolprofile" component={SchoolProfile} />
            <Route path="/about" component={About} />
            <Route path="/video" component={Video} />
            <Route path="/joinegf" component={Join} />
            <Route path="/news" component={News} />
            <Route path="/rulesandcodeofconduct" component={RulesAndCodeOfConduct} />
            <Route path="/vods" component={Vods} />
            <Route path="/" component={Homepage} />
        </Switch>
    </div>
    </BrowserRouter>
, document.getElementById('root'));