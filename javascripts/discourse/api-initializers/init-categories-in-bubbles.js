import {createWidget} from 'discourse/widgets/widget';
import {apiInitializer} from "discourse/lib/api";


export default apiInitializer("0.8", (api) => {


    createWidget('categories-in-bubbles', {
        tagName: "div.categories-in-bubbles",


        html() {
            const container = Discourse.__container__;
            const categories = container.lookup("controller:navigation/categories").site.categories;
            categories.forEach(function (category) {
                console.log(category.name)
            });
            console.log(categories[0].name);
            return categories[0].name;

        }
    });

})
;
