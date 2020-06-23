import TreeItem from "@ui5/webcomponents/dist/TreeItem.js";

const metadata = {
	tag: "ui5-custom-tree-item",
	properties: {
		description: {
			type: String,
		},
	},
};

class CustomTreeItem extends TreeItem {
	static get metadata() {
		return metadata;
	}
}

CustomTreeItem.define();

export default CustomTreeItem;
