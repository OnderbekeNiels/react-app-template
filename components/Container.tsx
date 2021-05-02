import React from 'react';
import '../styles/screen.scss';

export default function Container(props: any) {
    return (
        <div className={`o-container ${props.childern}`}>
            {props.children}
        </div>
    )
}