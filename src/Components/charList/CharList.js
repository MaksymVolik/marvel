import { useState, useEffect, createRef } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './charList.scss';

const setContent = (process, items, newItemLoading) => {
    switch (process) {
        case 'initial':
            return null;
        case 'loading':
            return newItemLoading ? items : <Spinner />;
        case 'confirmed':
            return items;
        case 'error':
            return <ErrorMessage />;
        default:
            throw new Error('Unexpected process status');
    }
}

const CharList = (props) => {
    const [charList, setCharList] = useState([]);
    const [offset, setOffset] = useState(210);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [charEnded, setCharEnded] = useState(false);

    const { charId, onCharSelected } = props

    const { process, setProcess, getAllCharacters } = useMarvelService();

    useEffect(() => {
        onRequest();
        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        }
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (newItemLoading && !charEnded) {
            onRequest();
        }
        // eslint-disable-next-line
    }, [newItemLoading])

    const onScroll = () => {
        if (window.innerHeight + window.scrollY - 100 >= document.body.offsetHeight) {
            setNewItemLoading(true);
        }
    };

    const onRequest = () => {
        getAllCharacters(offset)
            .then(onCharListLoaded)
            .then(() => setProcess('confirmed'))
            .finally(() => setNewItemLoading(false));
    }

    const onCharListLoaded = (newCharList) => {
        setCharList(charList => [...charList, ...newCharList]);
        setOffset(offset => offset + 9);
        setCharEnded(newCharList.length < 9 ? true : false);
    }

    function renderItem(arr) {
        const items = arr.map((item) => {
            const styleImg = item.thumbnail.lastIndexOf("image_not_available") !== -1 ? { objectFit: 'unset' } : { objectFit: 'cover' }
            const clazz = charId === item.id ? 'char-list__item_selected' : '';
            const nodeRef = createRef(null);
            return (
                <CSSTransition nodeRef={nodeRef} key={item.id} timeout={500} classNames="char-list__item">
                    <li ref={nodeRef}
                        tabIndex={0}
                        onClick={() => onCharSelected(item.id)}
                        onKeyDown={e => {
                            if (e.key === ' ' || e.key === 'Enter') {
                                e.preventDefault();
                                onCharSelected(item.id)
                            }
                        }}
                        className={`char-list__item ${clazz}`}>
                        <div className="char-list__image">
                            <img style={styleImg} src={item.thumbnail} alt={item.name} />
                        </div>
                        <div className="char-list__name">{item.name}</div>
                    </li>
                </CSSTransition>
            )
        })
        return (
            <ul className="char-list__box">
                <TransitionGroup component={null} appear>
                    {items}
                </TransitionGroup>
            </ul>
        )
    }

    // const element = useMemo(() => {
    //     return setContent(process, () => renderItem(charList), newItemLoading);
    //     // eslint-disable-next-line
    // }, [process])

    return (
        <div className="char-list">
            {setContent(process, renderItem(charList), newItemLoading)}
            <button
                className="char-list__btn button button_main-color button_long"
                disabled={newItemLoading}
                style={{ 'display': charEnded ? 'none' : 'block' }}
                onClick={() => setNewItemLoading(true)}
            >LOAD MORE</button>
        </div>
    )

}

CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired
}

export default CharList;