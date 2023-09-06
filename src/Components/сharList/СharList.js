import { Component } from 'react';
import PropTypes from 'prop-types';
import MarvelService from '../../services/MarvelService';
import CharCard from '../charCard/CharCard';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './charList.scss';

class CharList extends Component {
    state = {
        charList: [],
        loading: true,
        error: false,
        offset: 210, //1562
        newItemLoading: false,
        charEnded: false
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.onRequest();
        window.addEventListener('scroll', this.onScroll);

        this.getLocalOffset();
    }

    getLocalOffset = () => {
        const local = localStorage.getItem('offset');

        if (!local) {
            return;
        }
        console.log(this.state.offset);

        let i = this.state.offset;

        while (i < local) {
            i = i + 9;
            this.onRequest(i)

        }

    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll);
    }

    onScroll = () => {
        if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            this.onRequest(this.state.offset);
        }
    }

    onRequest = (offset) => {
        this.onCharListLoading();

        this.marvelService
            .getAllCharacters(offset)
            .then(this.onCharListLoaded)
            .catch(this.onError);
    }

    onCharListLoading = () => {
        this.setState({
            newItemLoading: true,
        })
    }

    onCharListLoaded = (newCharList) => {
        let ended = false;
        if (newCharList.length < 9) {
            ended = true;
            window.removeEventListener('scroll', this.onScroll);
        }
        this.setState(({ charList, offset }) => ({
            charList: [...charList, ...newCharList],
            loading: false,
            newItemLoading: false,
            offset: offset + 9,
            charEnded: ended
        }))
        localStorage.setItem('offset', this.state.offset)
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    render() {
        const { charList, loading, error, newItemLoading, offset, charEnded } = this.state;
        const { charId, onCharSelected } = this.props
        const spinner = loading ? <Spinner /> : null;
        const errorMessage = error ? <ErrorMessage /> : null;
        const view = !(loading || error) ? <View charList={charList} selected={charId} onSelected={onCharSelected} /> : null;

        return (
            <div className="char-list">
                {spinner}
                {errorMessage}
                <ul className="char-list__box">
                    {view}
                </ul>
                <button
                    className="char-list__btn button button_main-color"
                    disabled={newItemLoading}
                    style={{ 'display': charEnded ? 'none' : 'block' }}
                    onClick={() => this.onRequest(offset)}
                >LOAD MORE</button>
            </div>
        )
    }
}

const View = ({ charList, onSelected, selected }) => {
    return (

        charList.map(item => {
            const { id, ...itemProps } = item;
            const clazz = selected === id ? 'char-card_selected' : null;

            return (
                < CharCard
                    key={id}
                    {...itemProps}
                    clazz={clazz}
                    onSelected={() => onSelected(id)} />
            )
        })
    )
}

CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired
}

export default CharList;