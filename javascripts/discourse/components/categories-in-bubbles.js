import Component from "@ember/component";
import discourseComputed from "discourse-common/utils/decorators";
import { equal } from "@ember/object/computed";
import { isEmpty } from "@ember/utils";

@discourseComputed("categories.[].uploaded_logo.url")
console.log(this.categories);

export default Component.extend({
    tagName: "section",
    classNameBindings: [
        ":category-bubbles",
        "console",
        "anyLogos:with-logos:no-logos",
        "hasSubcategories:with-subcategories",
    ],
    noCategoryStyle: equal("siteSettings.category_style", "none"),
    lockIcon: "lock",


    @discourseComputed("categories.[].uploaded_logo.url")
    console() {

        console.log(this.categories);
    },
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