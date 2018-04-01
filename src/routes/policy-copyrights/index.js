import {h} from "preact"

import View from "components/view"

import styles from "./style"

const PolicyCopyrights = () => {
	const d = new Date()
	return (
		<View class={styles.view}>
			<h2>Policy &amp; Copyrights</h2>
			<p>This website and the content by <a href="/" title="Greg Bak Portfolio">Greg Bak</a> is licensed under a <a href="https://creativecommons.org/licenses/by/4.0/" title="Attribution 4.0 International">Attribution 4.0 International</a>, unless otherwise noted.</p>
			<h3>Simply:</h3>
			<p>
				You can <em>Share</em> — copy and redistribute the material in any medium or format.<br/>
				You can <em>Adapt</em> — remix, transform, and build upon the material for any purpose, even commercially.
			</p>
			<h3>But.</h3>
			<p>
				You <em>must</em> give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
			</p>
		</View>
	)
}

export default PolicyCopyrights