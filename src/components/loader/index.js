import {h} from "preact"

import styles from "./style"

const Loader = (props) => (
	<svg
		class={styles.loader}
		width="88px"
		height="76.21px"
		{...props}		
		>
		<path
			class={styles.left}
			fill="currentColor"
			d="M0,76.21 L22,38.1 L44,76.21 L0,76.21 Z"
			/>
		<path
			class={styles.top}
			fill="currentColor"
			d="M22,38.1 L44,0 L66,38.1 L22,38.1 Z"
			/>
		<path
			class={styles.right}
			fill="currentColor"
			d="M88,76.21 66,38.1 L44,76.21 L88,76.21 Z"
			/>
		<path
			class={styles.center}
			fill="currentColor"
			d="M22,38.1 L66,38.1 L44,76.21 L22,38.1 Z"
			/>
	</svg>
)

export default Loader
