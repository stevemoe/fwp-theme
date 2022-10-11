import Component from "@ember/component";
import discourseComputed from "discourse-common/utils/decorators";
import {equal} from "@ember/object/computed";
import {isEmpty} from "@ember/utils";

export default Component.extend({
    tagName: "section",
    classNameBindings: [
        ":category-bubbles",
        "anyLogos:with-logos:no-logos",
        "hasSubcategories:with-subcategories",
    ],
    noCategoryStyle: equal("siteSettings.category_style", "none"),
    lockIcon: "lock",

    categorieys: null,

    init() {
        const container = Discourse.__container__;
        const categoryList = container.lookup("controller:navigation/categories").site.categories;
        this._super(...arguments);
        this.set('categories', categoryList);
        console.log(this.categories);
    },


    anyLogos() {
        console.log(this.categories);
        return this.categories.any((c) => !isEmpty(c.get("uploaded_logo.url")));

    },


    hasSubcategories() {
        return this.categories.any((c) => !isEmpty(c.get("subcategories")));
    },
});

