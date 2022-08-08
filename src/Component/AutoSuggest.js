import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Autosuggest from 'react-autosuggest';
import SearchBarAction from '../Store/Action/SearchBarAction'
import { useDispatch } from 'react-redux'




const AutosuggestComp = () => {
    const [value, setValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [selected, setSelected] = useState("");
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const getSuggestionValue = (suggestion) => { return suggestion.Title }

    const getSuggestions = value => {
        // const inputValue = value.trim().toLowerCase();
        // const inputLength = inputValue.length;

        // return inputLength === 0
        //     ? []
        //     : allItems.filter(
        //         item => item.Title.toLowerCase().slice(0, inputLength) === inputValue
        //     );
        if (value) {
            return allItems
        }
        else { return [] }
    }



    const renderSuggestion = suggestionss => <Link to={`/product-listing-pages/${suggestionss.Title}?category=${suggestionss.categoryData.slug}&searchValue=${suggestionss.Title}`}
    > <div>{suggestionss.Title}<span>{suggestionss.Quantity}</span></div> </Link>;


    const onChange = (event, { newValue }) => {
        setValue(newValue);

        SearchBarAction(dispatch, { searchValue: newValue })
    };
    const allItems = useSelector(state => state.SearchBarReducer.SearchBarData)
    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            navigate(`/product-listing-pages/${e.target.value}`)
        }
    }
    {/*let raw;
    allItems.map((item) => {
        return raw = {
            title: item.Title,
            quant: item.Quantity,
            id: item._id
        }
    })
console.log(raw)*/}
    const onSuggestionsFetchRequested = ({ value }) => {
        setSuggestions(getSuggestions(value));
    };
    // console.log(getSuggestions(value))
    const onSuggestionsClearRequested = () => setSuggestions([]);

    const onSuggestionSelected = (event, { suggestion }) => {

        setSelected(suggestion.Title);
    };

    const inputProps = {
        placeholder: "Type a character name",
        value,
        onChange,
        onKeyPress
    };
    return (
        <Autosuggest
            suggestions={allItems ? allItems : []}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            onSuggestionSelected={onSuggestionSelected}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            highlightFirstSuggestion={true}
            inputProps={inputProps}
        />
    )
}

export default AutosuggestComp;