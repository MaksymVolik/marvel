import './charCard.scss';

const CharCard = (props) => {
    const { name, thumbnail, clazz, onSelected } = props
    const styleImg = thumbnail.lastIndexOf("image_not_available") !== -1 ? { objectFit: 'unset' } : { objectFit: 'cover' }

    return (

        <li
            tabIndex={0}
            onClick={onSelected}
            onKeyDown={e => {
                if (e.key === ' ' || e.key === 'Enter') {
                    e.preventDefault();
                    onSelected()
                }
            }}
            className={`char-card ${clazz}`}>
            <div className="char-card__image">
                <img style={styleImg} src={thumbnail} alt={name} />
            </div>
            <div className="char-card__name">{name}</div>
        </li>
    )
}

export default CharCard;