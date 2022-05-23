import React from 'react';
import '../styles/About/About.css';

import slikaJedan from '../image/cards/matthew.png';
import slikaDva from '../image/cards/lindsay.png';
import slikaTri from '../image/cards/kristy.png';


function Cards() {
  return (
    <div className='cardWrapper'>
        <div className="ui link cards">
            <div className="card">
                <div className="image">
                <img alt='prvaSlika' src={slikaJedan}/>
                </div>
                <div className="content">
                <div className="header">Matt Giampietro</div>
                <div className="meta">
                    <a href="/#">Osnivac i glavni kuvar</a>
                </div>
                <div className="description">
                    Pizza mi je sve na svetu. Volim kada dobro spremam hranu jer to cini ljude srecnim.
                </div>
                </div>
                <div className="extra content">
                </div>
            </div>
            <div className="card">
                <div className="image">
                <img alt='drugaSlika' src={slikaDva}/>
                </div>
                <div className="content">
                <div className="header">Molly</div>
                <div className="meta">
                    <span className="date">Glavni menadzer</span>
                </div>
                <div className="description">
                    Cilj mi je da nasa (najbolja) pizza bude u svakom domu.
                </div>
                </div>
                <div className="extra content">


                </div>
            </div>
            <div className="card">
                <div className="image">
                <img alt='trecaSlika' src={slikaTri}/>
                </div>
                <div className="content">
                <div className="header">Elyse</div>
                <div className="meta">
                    <a href="/#">Pomocni kuvar</a>
                </div>
                <div className="description">
                    Kuvanje je moja strast. Nadam se da cu jednog dana biti sef kuhinje.
                </div>
                </div>
                <div className="extra content">
                </div>
            </div>
        </div>
    </div>
  )
}



export default Cards
