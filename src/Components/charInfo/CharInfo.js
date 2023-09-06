import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import Sceleton from '../skeleton/Skeleton';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './charInfo.scss';

class CharInfo extends Component {
    state = {
        char: null,
        loading: false,
        error: false
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.updateChar()
    }

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar()
        }
    }

    updateChar = () => {
        const { charId } = this.props;

        if (!charId) {
            return
        }

        this.onCharLoading();

        this.marvelService
            .getCharacter(charId)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    onCharLoading = () => {
        this.setState({
            loading: true,
            error: false
        })
    }

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

    render() {
        const { char, loading, error } = this.state;
        const sceleton = (char || loading || error) ? null : <Sceleton />;
        const spinner = loading ? <Spinner /> : null;
        const errorMessage = error ? <ErrorMessage /> : null;
        const content = !(loading || error || !char) ? <View char={char} /> : null;

        return (
            <div className="char-info">
                {sceleton}
                {spinner}
                {errorMessage}
                {content}
            </div>
        )
    }
}

const View = ({ char }) => {
    const { name, description, thumbnail, homepage, wiki, comics } = char;
    const imgStyle = thumbnail.lastIndexOf("image_not_available") !== -1 ? { objectFit: 'contain' } : { objectFit: 'cover' }
    let comicsList = "The list of comics is missing for the selected character"

    if (comics.length !== 0) {
        comicsList = comics.slice(10).map((item, i) => {
            return (
                <li key={i} className="char-info__comic-book-title">{item.name}</li>
            )
        })
    }


    return (
        <>
            <div className="char-info__character">
                <div className="char-info__image">
                    <img style={imgStyle} src={thumbnail} alt={name} />
                </div>
                <div className="char-info__wraper">
                    <h2 className="char-info__title">{name}</h2>

                    <a href={homepage} className="char-info__btn button button_main-color">HOMEPAGE</a>
                    <a href={wiki} className="char-info__btn button button_grey">WIKI</a>

                </div>
            </div>
            <div className="char-info__descr">
                {description}
            </div>
            <div className="char-info__comics">
                <h3 className="char-info__subtitle">Comics:</h3>
                <ul className="char-info__list">
                    {comicsList}

                </ul>
            </div>
        </>
    )
}

export default CharInfo;