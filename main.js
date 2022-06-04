import Typewriter from 'typewriter-effect/dist/core';
import './style.css'

var app = document.getElementById('title');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('xerosic')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Incompetent web dev!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Almost serious backend dev')
    .pauseFor(2500)
    .start();
