import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import { fetchI18nBundle, getI18nBundle } from "@ui5/webcomponents-base/dist/i18nBundle.js";

// Template
import CustomTreeTemplate from "./generated/templates/CustomTreeTemplate.lit.js";

// Styles
import CustomTreeCss from "./generated/themes/CustomTree.css.js";

import { PLEASE_WAIT } from "./generated/i18n/i18n-defaults.js";

const metadata = {
	tag: "ui5-custom-tree",
	properties: {
	},
	slots: {
	},
	events: {
	},
};

class CustomTree extends UI5Element {
	constructor() {
		super();
		this.i18nBundle = getI18nBundle("custom-tree");
	}

	get pleaseWaitText() {
		return this.i18nBundle.getText(PLEASE_WAIT);
	}

	static get metadata() {
		return metadata;
	}

	static get render() {
		return litRender;
	}

	static get template() {
		return CustomTreeTemplate;
	}

	static get styles() {
		return CustomTreeCss;
	}

	static async onDefine() {
		await fetchI18nBundle("custom-tree");
	}
}

CustomTree.define();

export default CustomTree;
