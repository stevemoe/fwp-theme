import {createWidget} from 'discourse/widgets/widget';
import {apiInitializer} from "discourse/lib/api";


export default apiInitializer("0.8", (api) => {


    createWidget('categories-in-bubbles', {
        tagName: "div.categories-in-bubbles",


        html() {


            const ajax = require('discourse/lib/ajax').ajax;
            let categoryList =[];
            ajax("/site.json").then(function (result) { // Get list of categories
                result.categories.forEach(function (categories) {
                    categoryList.push(categories);
                });
                console.log("category1");
                console.log(categoryList);
            });
            console.log("category2");
            console.log(categoryList.firstObject);

            categoryList.forEach(function (category) {
                console.log(category)
            });

            return (category1);
        }
    });

})
;
