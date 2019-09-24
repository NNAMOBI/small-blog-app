import React from 'react'

export default function Layout(props) {
    return (
        <div className="header">
            <h3><a href="/">CiviCodeng BLOG</a></h3>
            <nav>
                <ul>
                    <li><a href='/publishpost'>publishpost</a></li>
                    <li><a href='/blogpost'>blogpost</a></li>
                    <li><a href='/login'>login</a></li>
                    <li><a href='/signup'>signup</a></li>
                    <li><a href='/blog'>blog</a></li>
                </ul>
            </nav>
            {props.children}
        </div>
    )
}
