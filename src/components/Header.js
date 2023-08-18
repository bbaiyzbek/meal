import React from "react";
import {Link} from "react-router-dom"
import InputBtn from "./input-btn";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className={'header'}>
                    <div className={'logo'}>
                        <h1>Chef-BaQuna</h1>
                    </div>
                    <div className={'navs'}>
                        <InputBtn/>
                        <nav >
                            <Link className={'linki'} to={'/'}>Home</Link>
                            <Link className={'linki'} to={'/about'}>About</Link>
                        </nav>

                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header