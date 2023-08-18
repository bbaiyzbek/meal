import React, {useState} from 'react';
import {useNavigate} from "react-router";

const InputBtn = () => {
    const [value, setValue] =useState('')
    const navigate = useNavigate()
    return (
        <div>
            <div className={'search-btn'}>
                <input type="text" placeholder={'search for a meal'} onChange={(e) => setValue(e.target.value)}/>
                <button onClick={() => navigate(`/search/${value}`)} type="submit" >&#128269;</button>
            </div>
        </div>
    );
};

export default InputBtn;