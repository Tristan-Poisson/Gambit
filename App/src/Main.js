 
import ReactDOM from 'react-dom';
import './Main.css';
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export function Header(props){
    return (
        <header>
            <h1> Bienvenue sur gambit </h1>
        </header>
    );
}

export class Main extends Component {
    testTest1 = "test";
    render() {
        return (
            <div>
                <Header />
        <div class="left">
            <div class="presentation">
                <h2>Quelque explication sur ce site</h2>
                <p></p>
            </div>
            <div class="connect">
                <p><a href="/connect">text</a></p>
            </div>
            <div class="biss1">
                <p>text</p>
            </div>
            <div class="biss2">
                <h1>text</h1>
                <p>text</p>
            </div>
        </div>
        <div class="right">
            <h1>Cours Gratuit</h1>
            <div class="cour">
                <h1>Math</h1>
                <div class="lesson">
                    <div class="titre">
                        <h1></h1>
                    </div>
                    <div class="info">
                        <p>UwU</p>
                        <p>UwU</p>
                    </div>
                </div>
            </div>
            <div class="cour">
                <h1>Géographie</h1>
                <div class="lesson">
                    <div class="titre">
                        <h1></h1>
                    </div>
                    <div class="info">
                        <p></p>
                        <p></p>
                    </div>
                </div>
            </div>
            <div class="cour">
                <h1>Français</h1>
                <div class="lesson">
                    <div class="titre">
                        <h1></h1>
                    </div>
                    <div class="info">
                        <p></p>
                        <p></p>
                    </div>
                </div>
            </div>
            <div class="cour">
                <h1>SVT</h1>
                <div class="lesson">
                    <div class="titre">
                        <h1></h1>
                    </div>
                    <div class="info">
                        <p></p>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        )
    };
}

export default Main
