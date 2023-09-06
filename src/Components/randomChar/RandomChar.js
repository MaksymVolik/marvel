import { Component } from 'react';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import MarvelService from '../../services/MarvelService';

import './randomChar.scss';

class RandomChar extends Component {
    state = {
        char: {},
        loading: true,
        error: false
    }

    marvelService = new MarvelService();

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false,
        })

    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    updateChar = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        this.onCharLoading();
        this.marvelService
            .getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    onCharLoading = () => {
        this.setState({
            loading: true,
            error: false
        })
    }

    componentDidMount() {
        this.updateChar()
        // this.timerId = setInterval(this.updateChar, 3000)
    }

    componentWillUnmount() {
        // clearInterval(this.timerId)
    }

    render() {
        const { char, loading, error } = this.state;
        const spinner = loading ? <Spinner /> : null;
        const errorMessage = error ? <ErrorMessage /> : null;
        const view = !(loading || error) ? <View char={char} /> : null;


        return (
            <div className="random-char">
                {spinner}
                {errorMessage}
                {view}
                <div className="rendom-char__cta-block cta-block">
                    <div className='cta-block__text'>
                        <div >Random character for today!</div>
                        <div >Do you want to get to know him better?</div>
                        <div >Or choose another one</div>
                    </div>

                    <div className="cta-block__button">
                        <button onClick={this.updateChar} className="cta-block__btn button button_main-color">TRY IT</button>
                    </div>
                </div>
            </div>
        )
    }
}

const View = ({ char }) => {
    const { name, description, thumbnail, homepage, wiki } = char;
    const imgStyle = thumbnail.lastIndexOf("image_not_available") !== -1 ? { objectFit: 'contain' } : { objectFit: 'cover' }

    return (
        <div className="rendom-char__block block">
            <div className="block__image">
                <img
                    style={imgStyle}
                    src={thumbnail}
                    alt="random character" />
            </div>
            <div className="block__descr">
                <h2 className="block__title">{name}</h2>
                <div className="block__text">
                    {description}
                </div>
                <div className="block__button">
                    <a href={homepage} className="block__btn button button_main-color">HOMEPAGE</a>
                    <a href={wiki} className="block__btn button button_grey">WIKI</a>
                </div>
            </div>
        </div>
    )
}


export default RandomChar;
