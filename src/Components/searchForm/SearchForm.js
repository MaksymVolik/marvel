import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import useMarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import * as Yup from "yup";
import './searchForm.scss';

const ClearMsg = (props) => {
    const { values } = useFormikContext();

    useEffect(() => {
        props.setChar(null);
        // eslint-disable-next-line
    }, [values]);

    return null;
};

const SearchForm = () => {
    const [char, setChar] = useState(null);
    const { process, setProcess, clearError, getCharacterByName } = useMarvelService();

    const searchChar = (name) => {
        clearError();
        setChar(null);

        getCharacterByName(name)
            .then(onCharLoaded)
            .then(() => setProcess('confirmed'));
    }

    const onCharLoaded = (char) => {
        setChar(char);
    }

    const errorMsg = process === 'error' ? <div className="search__error">An unexpected error occurred while searching for a character. Try again.</div> : null;
    const spinner = process === 'loading' ? <Spinner size="24px" margin='25px auto 0 auto' /> : null;

    const content = !char ? null : char.length > 0 ?
        <div className="search__block">
            <div className="search__label search__label_green">There is {char[0].name}! Visit page?</div>
            <Link
                className='search-btn button button_grey'
                to={`/character/${char[0].id}`}
                tabIndex={0}
            >to page</Link>
        </div> :
        <div className="search__error">The character was not found. Check the name and try again</div>

    return (
        <Formik
            initialValues={{
                name: ''
            }}
            validationSchema={Yup.object({
                name: Yup.string().required("This field is required")
            })}
            onSubmit={({ name }) => searchChar(name)}>
            <Form className="search">
                <label htmlFor="name" className="search__label">Or find a character by name:</label>
                <div className="search__block">
                    <Field
                        id="name"
                        name="name"
                        type="text"
                        className="search__input"
                        placeholder='Enter name'
                    />
                    <button
                        type="submit"
                        disabled={process === 'loading'}
                        className='search-btn button button_main-color'>find</button>
                </div>
                <ErrorMessage className="search__error" name="name" component="div" />
                {errorMsg}
                {spinner}
                {content}
                <ClearMsg setChar={setChar} />
            </Form>
        </Formik>
    )
}

export default SearchForm;