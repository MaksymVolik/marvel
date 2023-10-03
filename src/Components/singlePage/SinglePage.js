import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './singlePage.scss';

const SinglePage = (props) => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    const { loading, error, clearError, getComic, getCharacter } = useMarvelService();

    useEffect(() => {
        updateItem();
    }, [id])

    const updateItem = () => {
        clearError();

        if (props.page === 'comic') {
            getComic(id)
                .then(onItemLoaded);
        } else if (props.page === 'character') {
            getCharacter(id)
                .then(onItemLoaded);
        }
    }

    const onItemLoaded = (item) => {
        setItem(item);
    }

    const renderPage = props.page === "comic"
        ? <SingleComic item={item} />
        : props.page === "character"
            ? <SingleChar item={item} />
            : null
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error || !item) ? renderPage : null;

    return (
        <div style={{ 'marginTop': '50px' }}>
            {errorMessage}
            {spinner}
            {content}
        </div>
    )
}

const SingleComic = ({ item }) => {
    let navigate = useNavigate();

    const { title, description, pageCount, thumbnail, language, price } = item;

    return (
        <div className="single-comic">
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={`${title} comics book`} />
            </Helmet>
            <img src={thumbnail} alt={title} className="single-comic__img" />
            <div className="single-comic__info">
                <h2 className="single-comic__name">{title}</h2>
                <p className="single-comic__descr">{description}</p>
                <p className="single-comic__descr">{pageCount}</p>
                <p className="single-comic__descr">Language: {language}</p>
                <div className="single-comic__price">{price}</div>
            </div>
            <div onClick={() => navigate(-1)} className="single-comic__back">Go back</div>
        </div>
    )
}

const SingleChar = ({ item }) => {
    const { name, description, thumbnail } = item;

    return (
        <div className="single-comic">
            <Helmet>
                <title>{name}</title>
                <meta name="description" content={`${name} information page`} />
            </Helmet>
            <img src={thumbnail} alt={name} className="single-comic__imgChar" />
            <div className="single-comic__info">
                <h2 className="single-comic__name">{name}</h2>
                <p className="single-comic__descr">{description}</p>
            </div>
        </div>
    )
}

export default SinglePage;