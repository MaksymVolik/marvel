import { useState, useEffect } from 'react';
import setContent from '../../utils/setContent';
import useMarvelService from '../../services/MarvelService';

import './randomChar.scss';

const RandomChar = () => {
    const [char, setChar] = useState(null);
    const { process, setProcess, clearError, getCharacter } = useMarvelService();

    useEffect(() => {
        updateChar();
        // const timerId = setInterval(updateChar, 15000);

        // return () => {
        //     clearInterval(timerId);
        // }
        // eslint-disable-next-line
    }, [])

    const onCharLoaded = (char) => {
        setChar(char);
    }

    const updateChar = () => {
        clearError();
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        getCharacter(id)
            .then(onCharLoaded)
            .then(() => setProcess('confirmed'));;
    }

    return (
        <div className="random-char">
            {setContent(process, View, char)}
            <div className="rendom-char__cta-block cta-block">
                <div className='cta-block__text'>
                    <div >Random character for today!</div>
                    <div >Do you want to get to know him better?</div>
                    <div >Or choose another one</div>
                </div>

                <div className="cta-block__button">
                    <button onClick={updateChar} className="cta-block__btn button button_main-color">TRY IT</button>
                </div>
            </div>
        </div>
    )

}

const View = ({ data }) => {
    const { name, description, thumbnail, homepage, wiki } = data;
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
