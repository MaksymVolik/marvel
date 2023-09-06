import './comic.scss';

const Comic = () => {
    return (
        <div className="comic">
            <div className="comic__image">
                <img src="./img/5f763dfe65adb2634961ece9a9bccf38.jpeg" alt="comic" />
            </div>
            <div className="comic__descr">
                <div className="comic__name">X-Men: Days of Future Past</div>
                <div className="comic__text">
                    Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!?
                </div>
                <div className="comic__page">144 pages</div>
                <div className="comic__language">Language: en-us</div>
                <div className="comic__price">9.99$</div>
            </div>
            <div className="comic__back">back to all</div>
        </div>
    )
}

export default Comic;