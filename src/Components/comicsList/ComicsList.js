import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './comicsList.scss';

const setContent = (process, Component, newItemLoading) => {
    switch (process) {
        case 'initial':
            return null;
        case 'loading':
            return newItemLoading ? <Component /> : <Spinner />;
        case 'confirmed':
            return <Component />;
        case 'error':
            return <ErrorMessage />;
        default:
            throw new Error('Unexpected process status');
    }
}

const ComicsList = (props) => {
    const [comicsList, setComicsList] = useState([]);
    const [offset, setOffset] = useState(0);
    const [newItemLoading, setNewItemLoading] = useState(true);
    const [comicsEnded, setComicsEnded] = useState(false)

    const { process, setProcess, getAllComics } = useMarvelService();

    useEffect(() => {
        onRequest(offset, true)
        // eslint-disable-next-line
    }, [])

    const onRequest = (offset, initial) => {
        setNewItemLoading(initial ? false : true)
        getAllComics(offset)
            .then(getComicsLoaded)
            .then(() => setProcess('confirmed'));
    }

    const getComicsLoaded = (newComics) => {
        setComicsList(() => [...comicsList, ...newComics])
        setNewItemLoading(false);
        setOffset(offset => offset + 8);
        setComicsEnded(newComics.lenght < 8);

    }

    function renderItems(arr) {

        const items = arr.map((item, i) => {
            const styleImg = item.thumbnail.lastIndexOf("image_not_available") !== -1 ? { objectFit: 'unset' } : { objectFit: 'cover' }

            return (
                <li
                    className="comics__item"
                    key={item.id}
                    tabIndex={0}
                    onClick={() => {
                        props.onComicsSelected(item.id);
                        // focusOnItem(i);
                    }}
                    onKeyDown={e => {
                        if (e.key === ' ' || e.key === 'Enter') {
                            e.preventDefault();
                            props.onComicsSelected(item.id);
                        }
                    }}>

                    <Link to={`/comics/${item.id}`}>
                        <img src={item.thumbnail} alt={item.title} style={styleImg} className="comics__item-img" />
                        <div className="comics__item-name">{item.title}</div>
                        <div className="comics__item-price">{item.price}</div>
                    </Link>
                </li >
            )
        });

        return (
            <ul className="comics__grid">
                {items}
            </ul>
        )
    }

    return (
        <div className="comics__list">
            {setContent(process, () => renderItems(comicsList), newItemLoading)}
            <button
                className="comics__btn button button_main-color button_long"
                disabled={newItemLoading}
                style={{ 'display': comicsEnded ? 'none' : 'block' }}
                onClick={() => onRequest(offset)}
            >LOAD MORE</button>
        </div>

    )
}

export default ComicsList;