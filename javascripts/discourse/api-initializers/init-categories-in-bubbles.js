import {createWidget} from 'discourse/widgets/widget';
import {apiInitializer} from "discourse/lib/api";



export default apiInitializer("0.8", (api) => {

    createWidget('categories-in-bubbles', {
        tagName: "div.categories-in-bubbles",


        html() {
            let user = api.getCurrentUser();
            console.log(user);

            return "categories" + user;
        }
    });

});