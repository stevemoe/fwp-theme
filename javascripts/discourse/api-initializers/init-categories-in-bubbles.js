import {createWidget} from 'discourse/widgets/widget';
import {apiInitializer} from "discourse/lib/api";


export default apiInitializer("0.8", (api) => {

    const ajax = require('discourse/lib/ajax').ajax;

    createWidget('categories-in-bubbles', {
        tagName: "div.categories-in-bubbles",


        html() {

            function getInlineSVG() {

                let svg = null;
                ajax("/site.json").then(function (result) { // Get list of categories
                    let categoryName = [];
                    result.categories.forEach(function (categories) {
                        categoryName.push(categories);
                    });
                    $.get(categoryName[0].uploaded_background.url, function (data) {
                        svg = data;
                        console.log("get")
                        console.log(svg)
                    });
                    console.log("ajax:");
                    console.log(svg);
                });
                console.log("getInlineSVG");
                console.log(svg);
                return (svg);
            };

            return getInlineSVG();
        }
    });

});