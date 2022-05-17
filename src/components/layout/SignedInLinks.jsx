import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
            <ul className="right">
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            {/* // 作業段階にて下の行で'NN'を忘れたので下画像で円内に'NN'が表示されてませんが */}
            {/* // 表示されているのが正常なので悪しからず． */}
            <li><NavLink to='/' className="btn btn-floating pink lighten-1">NN</NavLink></li>
        </ul>
    )
}

export default SignedInLinks;