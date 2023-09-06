import { Component } from 'react';

import Header from '../header/Header';
import RandomChar from '../randomChar/RandomChar';
// import Banner from '../banner/Banner';
import CharList from '../сharList/СharList';
import CharInfo from '../charInfo/CharInfo';
// import Search from '../Search/search';
// import Comic from '../Сomic/comic';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';

import decoration from '../../resources/img/vision.png';

import './app.scss';

class App extends Component {
    state = {
        selectedChar: null
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    render() {
        return (
            <div className="App container">
                <Header />
                <main>
                    <ErrorBoundary>
                        <RandomChar />
                    </ErrorBoundary>
                    {/* <Banner /> */}
                    <div className="App__page">
                        <ErrorBoundary>
                            <CharList
                                onCharSelected={this.onCharSelected}
                                charId={this.state.selectedChar} />
                        </ErrorBoundary>
                        <div className="App__descr">
                            <ErrorBoundary>
                                <CharInfo charId={this.state.selectedChar} />
                            </ErrorBoundary>
                            {/* <Search /> */}
                        </div>
                    </div>

                    <img className="bg-decoration" src={decoration} alt="vision" />
                </main>

            </div>
        );
    }
}

export default App;
