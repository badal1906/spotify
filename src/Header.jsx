import React from 'react'
import {useDataLayerValue} from "./DataLayer"
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import {Avatar} from "@mui/material"

function Header() {
    const [{user},dispatch] = useDataLayerValue()
    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon/>
                <input 
                placeholder="Search for Artists, Songs"
                type="text" />
            </div>
            <div className="header__right">
                <Avatar src={user?.images[0]?.url}  alt={user}/>
                <h1>{user?.display_name}</h1>
            </div>
        </div>
    )
}

export default Header
