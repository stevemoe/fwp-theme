import {createWidget} from 'discourse/widgets/widget';
import {apiInitializer} from "discourse/lib/api";



export default apiInitializer("0.8", (api) => {

    createWidget('categories-in-bubbles', {
        tagName: "div.categories-in-bubbles",

        html() {
            return "{{#each this.categories as |c|}}\n" +
                "    <PluginOutlet @name=\"category-box-before-each-box\" @args={{hash category=c}} />\n" +
                "\n" +
                "    <div data-category-id={{c.id}} data-notification-level={{c.notificationLevelString}} data-url={{c.url}} class=\"category category-box category-box-{{c.slug}} {{if c.isMuted \"muted\"}} {{if this.noCategoryStyle \"no-category-boxes-style\"}} relative drop-shadow\">\n" +
                "        {{#if c.uploaded_background.url}}\n" +
                "            <CdnImg @src={{c.uploaded_background.url}} @class=\"background\" @width={{c.uploaded_background.width}} @height={{c.uploaded_background.height}} @alt=\"\" />\n" +
                "        {{/if}}\n" +
                "        <div class=\"category-box-inner bg-no-repeat bg-contain absolute\">\n" +
                "            {{#unless c.isMuted}}\n" +
                "                <div class=\"category-logo\">\n" +
                "                    {{#if c.uploaded_logo.url}}\n" +
                "                        <CdnImg @src={{c.uploaded_logo.url}} @class=\"logo\" @width={{c.uploaded_logo.width}} @height={{c.uploaded_logo.height}} @alt=\"\" />\n" +
                "                    {{/if}}\n" +
                "                </div>\n" +
                "            {{/unless}}\n" +
                "\n" +
                "            <div class=\"category-details\">\n" +
                "                <div class=\"category-box-heading\">\n" +
                "                    <a class=\"parent-box-link\" href={{c.url}}>\n" +
                "                        <h3>\n" +
                "                            <CategoryTitleBefore @category={{c}} />\n" +
                "                            {{#if c.read_restricted}}\n" +
                "                                {{d-icon this.lockIcon}}\n" +
                "                            {{/if}}\n" +
                "                            {{c.name}}\n" +
                "                        </h3>\n" +
                "                    </a>\n" +
                "                </div>\n" +
                "\n" +
                "            </div>\n" +
                "\n" +
                "            <PluginOutlet @name=\"category-box-below-each-category\" @args={{hash category=c}} />\n" +
                "        </div>\n" +
                "    </div>\n" +
                "\n" +
                "    <PluginOutlet @name=\"category-box-after-each-box\" @args={{hash category=c}} />\n" +
                "{{/each}}\n" +
                "\n" +
                "<PluginOutlet @name=\"category-boxes-after-boxes\" @args={{hash category=this.c}} />"
        }
    });

});