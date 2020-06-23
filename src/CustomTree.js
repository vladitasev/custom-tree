import Tree from "@ui5/webcomponents/dist/Tree.js";

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
}

CustomTree.define();

export default CustomTree;
