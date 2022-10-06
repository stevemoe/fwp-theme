import {createWidget} from 'discourse/widgets/widget';
import {apiInitializer} from "discourse/lib/api";


export default apiInitializer("0.8", (api) => {

    const ajax = require('discourse/lib/ajax').ajax;

    createWidget('categories-in-bubbles', {
        tagName: "div.categories-in-bubbles",


        html() {

            return("categories in bubbles");
        }
    });

});