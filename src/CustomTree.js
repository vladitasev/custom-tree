import Tree from "@ui5/webcomponents/dist/Tree.js";
import "./CustomTreeItem.js";

// Template
import CustomTreeTemplate from "./generated/templates/CustomTreeTemplate.lit.js";

// Styles
import CustomTreeCss from "./generated/themes/CustomTree.css.js";


const metadata = {
	tag: "ui5-custom-tree",
};

class CustomTree extends Tree {
	static get metadata() {
		return metadata;
	}

	static get template() {
		return CustomTreeTemplate;
	}

	static get styles() {
		return [Tree.styles, CustomTreeCss];
	}
}

CustomTree.define();

export default CustomTree;
