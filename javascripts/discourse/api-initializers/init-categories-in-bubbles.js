import {createWidget} from 'discourse/widgets/widget';
import {apiInitializer} from "discourse/lib/api";


export default apiInitializer("0.8", (api) => {

    ajax("/site.json").then (function(result){ // Get list of categories
        let categoryName = [];
        result.categories.forEach(function(categories){
            categoryName.push(categories);
        });
        component.set('categoryName', categoryName);
    });

    createWidget('categories-in-bubbles', {
        tagName: "div.categories-in-bubbles",


        html() {

            return("categories in bubbles widget");
        }
    });

});