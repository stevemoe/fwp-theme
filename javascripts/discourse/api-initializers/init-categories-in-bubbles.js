import {createWidget} from 'discourse/widgets/widget';
import {apiInitializer} from "discourse/lib/api";



export default apiInitializer("0.8", (api) => {

    createWidget('categories-in-bubbles.hbs', {
        tagName: "div.categories-in-bubbles.hbs",

        html() {
            return "categories"
        }
    });

});