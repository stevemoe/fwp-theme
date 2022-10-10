import {createWidget} from 'discourse/widgets/widget';
import {apiInitializer} from "discourse/lib/api";


export default apiInitializer("0.8", (api) => {


    createWidget('categories-in-bubbles', {
        tagName: "div.categories-in-bubbles",


        html() {
            const container = Discourse.__container__;
            const categories = container.lookup("controller:navigation/categories").site.categories;

            return ("categories[0].name");

        }
    });

})
;
