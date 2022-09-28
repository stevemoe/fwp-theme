import Component from "@ember/component";
import discourseComputed from "discourse-common/utils/decorators";
import { equal } from "@ember/object/computed";
import { isEmpty } from "@ember/utils";

export default Component.extend({
    tagName: "section",
    classNameBindings: [
        ":category-boxes",
        "anyBackground:with-background:no-background",
        "anyLogos:with-logos:no-logos",
        "hasSubcategories:with-subcategories",
    ],
    noCategoryStyle: equal("siteSettings.category_style", "none"),
    lockIcon: "lock",

    @discourseComputed("categories.[].uploaded_background.url")
    anyBackground() {
        return this.categories.any((c) => !isEmpty(c.get("uploaded_background.url")));
    },

    @discourseComputed("categories.[].uploaded_logo.url")
    anyLogos() {
        return this.categories.any((c) => !isEmpty(c.get("uploaded_logo.url")));
    },

    @discourseComputed("categories.[].subcategories")
    hasSubcategories() {
        return this.categories.any((c) => !isEmpty(c.get("subcategories")));
    },
});
