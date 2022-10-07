import {createWidget} from 'discourse/widgets/widget';
import {apiInitializer} from "discourse/lib/api";


export default apiInitializer("0.8", (api) => {


    createWidget('categories-in-bubbles', {
        tagName: "div.categories-in-bubbles",


        html() {
            const ajax = require('discourse/lib/ajax').ajax;
            let categories =[];
            ajax("/site.json").then(function (result) { // Get list of categories
                let categoryName = [];
                result.categories.forEach(function (categories) {
                    categories.push(categories);
                });
                console.log(categoryName);
            });
            console.log(categories);
            return (categories);
        }
    });

})
;
