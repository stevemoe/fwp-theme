import {createWidget} from 'discourse/widgets/widget';

createWidget('categories-in-bubbles', {
    tagName: "div.categories-in-bubbles",

    html() {
        return "categories"
    }
});