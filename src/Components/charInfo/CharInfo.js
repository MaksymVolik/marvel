import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import useMarvelService from '../../services/MarvelService';
import setContent from '../../utils/setContent';

import './charInfo.scss';

const CharInfo = (props) => {
    const [char, setChar] = useState(null);

    const { process, setProcess, clearError, getCharacter } = useMarvelService();

    useEffect(() => {
        setProcess('waiting');
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        updateChar();
        // eslint-disable-next-line
    }, [props.charId])

    const updateChar = () => {
        const { charId } = props;

        if (!charId) {
            return
        }
        clearError();
        getCharacter(charId)
            .then(onCharLoaded)
            .then(() => setProcess('confirmed'));
    }

    const onCharLoaded = (char) => {
        setChar(char);
    }

    return (
        <div className="char-info">
            {setContent(process, View, char)}
        </div>
    )
}

const View = ({ data }) => {
    const { name, description, thumbnail, homepage, wiki, comics } = data;
    const imgStyle = thumbnail.lastIndexOf("image_not_available") !== -1 ? { objectFit: 'contain' } : { objectFit: 'cover' };
    const nodeRef = useRef(null);;
    let comicsList = "The list of comics is missing for the selected character";

    if (comics.length !== 0) {
        comicsList = comics.slice(10).map((item, i) => (
            //item.resourceURI.match(/\/\d+/g)[0].slice(1);
            <li key={i} className="char-info__comic-book-title">
                <Link to={`/comics/${item.resourceURI.slice(item.resourceURI.lastIndexOf("/") + 1)}`}>{item.name}</Link>
            </li>
        ))
    }

    return (
        <CSSTransition nodeRef={nodeRef} in={true} timeout={500} classNames="char-info" appear >
            <div ref={nodeRef}>
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
                </div >
            </div>
        </CSSTransition>
    )
}

export default CharInfo;