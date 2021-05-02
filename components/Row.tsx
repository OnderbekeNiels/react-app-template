import React from 'react';
import '../styles/screen.scss'

export default function Row(props: any) {
    return (
        <section className={`o-row ${props.className}`}>
            {props.children}
        </section>
    )
}