import React, { Component } from 'react';
import Box from './components/Box';
import Button from './components/Button';

import './assets/Gameplay.ttf';
import './styles/App.scss';
import {fetchPlanets, getPlanet, getRandomPlanetIndex} from './functions/planets';
import {addPlanets, restartPlanets} from './functions/actions';
import store from './store';


const SWAPI_PLANETS = 'https://swapi.co/api/planets/';

const COLORS = [
    'red',
    'blue',
    'green',
    'yellow',
    'purple'
];

const getRandomColor = last => {
    let color = getRandomPlanetIndex(COLORS);
    return last !== COLORS[color] ? COLORS[color] : getRandomColor(last);
};

class App extends Component
{
    constructor(props){
        super(props);

        this.state = {
            loading: true,
            planet: {},
            planets: [],
            color: 'red'
        };

        this.fetchAll = this.fetchAll.bind(this);
        this.initialize = this.initialize.bind(this);
        this.nextHandler = this.nextHandler.bind(this);
        this.restartHandler = this.restartHandler.bind(this);
        this.getPlanetBox = this.getPlanetBox.bind(this);

        this.initialize();
    }

    initialize = () => {
        this.fetchAll();

        store.subscribe(() => {
            this.setState({
                loading: store.getState().loading,
                planets: store.getState().planetsRemaining,
                planet: store.getState().planet,
                color: getRandomColor(this.state.color)
            });
        });
    };

    fetchAll = () => process.env.NODE_ENV !== 'test' && fetchPlanets(SWAPI_PLANETS);

    nextHandler = () => getPlanet(this.state.planets);

    restartHandler = () => store.dispatch(restartPlanets());

    getPlanetBox = () => {
        const {
            planet: {
                name,
                population,
                climate,
                terrain,
                films
            },
            color,
            planets
        } = this.state;

        return planets.length !== 0 ?
            <Box
                planet={name}
                population={population}
                climate={climate}
                terrain={terrain}
                featured={films}
                color={this.state.color}
            />
            :
            <section className={`box ${color}`}>
                <header>
                    <h1>Congratulations</h1>
                </header>
                <div className="content">
                    You passed in all planets. Click in the button for restart.
                </div>
            </section>

    };

    render() {
        const {
            nextHandler,
            restartHandler,
            state:{
                loading,
                planets
            }
        } = this;

        return (
            <main className='App'>
                {
                    ! loading ?
                    this.getPlanetBox()
                    :
                    <span className="loading" />
                }
                {
                    ! loading && <Button
                        text={planets.length !== 0 ? 'NEXT' : 'RESTART'}
                        action={planets.length !== 0 ? nextHandler : restartHandler}
                        color={this.state.color}
                    />
                }
            </main>
        );
    }
}

export default App;
