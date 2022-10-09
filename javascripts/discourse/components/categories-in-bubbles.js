import Component from "@ember/component";
import discourseComputed from "discourse-common/utils/decorators";
import {equal} from "@ember/object/computed";
import {isEmpty} from "@ember/utils";
import {withPluginApi} from "discourse/lib/plugin-api";
import {tracked} from '@ember/tracking';

export default Component.extend({
    tagName: "section",
    classNameBindings: [
        ":category-bubbles",
        "categoryList",
        "anyLogos:with-logos:no-logos",
        "hasSubcategories:with-subcategories",
    ],
    noCategoryStyle: equal("siteSettings.category_style", "none"),
    lockIcon: "lock",



    categoryList() {
        const container = Discourse.__container__;
        const categoryList = container.lookup("controller:navigation/categories").site.categories;
        return categoryList;
    },

    // initialize() {
    //     withPluginApi("0.8.7", api => {
    //         const ajax = require('discourse/lib/ajax').ajax;
    //
    //         api.registerConnectorClass('below-site-header', 'custom-homepage', {
    //             setupComponent(args, component) {
    //                 component.set('hostname', window.location.hostname);
    //
    //                 api.onPageChange((url, title) => {
    //                     if (url == "/" || url == "/latest") {
    //                         $('html').addClass('show-custom-homepage'); // Show homepage
    //                         component.set('displayCustomHomepage', true);
    //
    //                         ajax("/site.json").then(function (result) { // Get list of categories
    //                             let categoryName = [];
    //                             result.categories.forEach(function (categories) {
    //                                 categoryName.push(categories);
    //                             });
    //                             console.log(categoryName);
    //                             component.set('categoryName', categoryName);
    //                         });
    //                     } else { // Hide homepage
    //                         $('html').removeClass('show-custom-homepage');
    //                         component.set('displayCustomHomepage', false);
    //                     }
    //                 });
    //             }
    //         });
    //     });
    //     return withPluginApi;
    // },


    // @discourseComputed("categories.[].uploaded_background.url")
    //
    // getInlineSVG() {
    //     $.get(this.categoryName.any((c) => !isEmpty(c.get("uploaded_background.url"))),function(data) {
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

