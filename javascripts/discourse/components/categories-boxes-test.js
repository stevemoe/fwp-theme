import Component from "@ember/component";
import discourseComputed from "discourse-common/utils/decorators";
import { equal } from "@ember/object/computed";
import { isEmpty } from "@ember/utils";

const ajax = require('discourse/lib/ajax').ajax;

ajax("/site.json").then (function(result){ // Get list of categories
    let categoryName = [];
    result.categories.forEach(function(categories){
        categoryName.push(categories);
    });
    console.log(categoryName);
});

console.log("test categories-boxes-test.js");


export default Component.extend({
    tagName: "section",
    classNameBindings: [
        ":category-boxes",
        "getInlineSVG",
        "anyLogos:with-logos:no-logos",
        "hasSubcategories:with-subcategories",
    ],
    noCategoryStyle: equal("siteSettings.category_style", "none"),
    lockIcon: "lock",

    // @discourseComputed("categories.[].uploaded_background.url")
    //
    // getInlineSVG() {
    //     $.get(this.categories.any((c) => !isEmpty(c.get("uploaded_background.url"))),function(data) {
    //         console.log(data);
    //     });
    // },
    //
    //
    // @discourseComputed("categories.[].uploaded_logo.url")
    // anyLogos() {
    //     return this.categories.any((c) => !isEmpty(c.get("uploaded_logo.url")));
    // },
    //
    // @discourseComputed("categories.[].subcategories")
    // hasSubcategories() {
    //     return this.categories.any((c) => !isEmpty(c.get("subcategories")));
    // },
});