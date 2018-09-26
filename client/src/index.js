import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'font-awesome/css/font-awesome.css';

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Alfa+Slab+One|Carter+One|Titan+One|Viga');
    html{
        line-height: 1.15; /* 1 */
        -webkit-text-size-adjust: 100%; /* 2 */
    }
    body{
        margin:0;
        height:100%;
        background:rgb(36, 37, 42);
    }
    div#root{
        height:auto;
    }
    h1 {
        font-size: 2em;
        margin: 0.67em 0;
    }
    a {
        background-color: transparent;
    }
    b,
    strong {
        font-weight: bolder;
    }
    code,
    kbd,
    samp {
        font-family: monospace, monospace; /* 1 */
        font-size: 1em; /* 2 */
    }
    small {
        font-size: 80%;
    }
    sub,
    sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
    }
    sub {
        bottom: -0.25em;
    }

    sup {
        top: -0.5em;
    }
    img {
        border-style: none;
    }
    button,
    input,
    optgroup,
    select,
    textarea {
        font-family: inherit; /* 1 */
        font-size: 100%; /* 1 */
        line-height: 1.15; /* 1 */
        margin: 0; /* 2 */
    }
    button,
    input { /* 1 */
        overflow: visible;
    }
    button,
        [type="button"],
        [type="reset"],
        [type="submit"] {
        -webkit-appearance: button;
    }

    /**
    * Remove the inner border and padding in Firefox.
    */

    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
    }

    /**
    * Restore the focus styles unset by the previous rule.
    */

    button:-moz-focusring,
    [type="button"]:-moz-focusring,
    [type="reset"]:-moz-focusring,
    [type="submit"]:-moz-focusring {
        outline: 1px dotted ButtonText;
    }

    /**
    * Correct the padding in Firefox.
    */

    fieldset {
        padding: 0.35em 0.75em 0.625em;
    }


    legend {
        box-sizing: border-box; /* 1 */
        color: inherit; /* 2 */
        display: table; /* 1 */
        max-width: 100%; /* 1 */
        padding: 0; /* 3 */
        white-space: normal; /* 1 */
    }

    /**
    * Add the correct vertical alignment in Chrome, Firefox, and Opera.
    */

    progress {
        vertical-align: baseline;
    }

    /**
    * Remove the default vertical scrollbar in IE 10+.
    */

    textarea {
        overflow: auto;
    }

    /**
    * 1. Add the correct box sizing in IE 10.
    * 2. Remove the padding in IE 10.
    */

    [type="checkbox"],
    [type="radio"] {
        box-sizing: border-box; /* 1 */
        padding: 0; /* 2 */
    }

    /**
    * Correct the cursor style of increment and decrement buttons in Chrome.
    */

    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
        height: auto;
    }

    /**
    * 1. Correct the odd appearance in Chrome and Safari.
    * 2. Correct the outline style in Safari.
    */

    [type="search"] {
        -webkit-appearance: textfield; /* 1 */
        outline-offset: -2px; /* 2 */
    }

    /**
    * Remove the inner padding in Chrome and Safari on macOS.
    */

    [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
    }

   

    ::-webkit-file-upload-button {
        -webkit-appearance: button; /* 1 */
        font: inherit; /* 2 */
    }

    /* Interactive
    ========================================================================== */

    /*
    * Add the correct display in Edge, IE 10+, and Firefox.
    */

    details {
        display: block;
    }

    /*
    * Add the correct display in all browsers.
    */

    summary {
        display: list-item;
    }

    /* Misc
    ========================================================================== */

    /**
    * Add the correct display in IE 10+.
    */

    template {
        display: none;
    }

    /**
    * Add the correct display in IE 10.
    */

    [hidden] {
        display: none;
    }

`
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
