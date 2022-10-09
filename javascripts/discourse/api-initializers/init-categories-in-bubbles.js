import {createWidget} from 'discourse/widgets/widget';
import {apiInitializer} from "discourse/lib/api";


export default apiInitializer("0.8", (api) => {


    createWidget('categories-in-bubbles', {
        tagName: "div.categories-in-bubbles",


        html() {
            const container = Discourse.__container__;
            const categories = container.lookup("controller:navigation/categories").site.categories;
            console.log(categories[0]);
            return categories;

            // const ajax = require('discourse/lib/ajax').ajax;
            // let categoryList =[];
            // ajax("/site.json").then(function (result) { // Get list of categories
            //     result.categories.forEach(function (categories) {
            //         categoryList.push(categories);
            //     }).catch(e => {
            //         console.log(e);
            //     });;
            //     console.log("category1");
            //     console.log(categoryList);
            // });
            // console.log("category2");
            // console.log(categoryList.firstObject);
            //
            // categoryList.forEach(function (category) {
            //     console.log(category)
            // });
            // console.log(this.get("model"));
            //
            // return (category1);
        }
    });

})
;
