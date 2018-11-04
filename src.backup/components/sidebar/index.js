import {h, Component} from "preact"
import {Link} from "preact-router/match"

import cn from "classnames"

import Radiv from "components/radiv"
import Filters from "components/filters"

import Logo from "icons/logo"

import styles from "./style"

export default class Sidebar extends Component {
	state = {
		forceNav: false
	}

	handleShowNav = () => {
		this.setState({
			forceNav: true,
		})
	}
	handleHideNav = () => {
		this.setState({
			forceNav: false
		})
	}

	render({step = 0}, {forceNav}) {
		return (
			<Radiv
				class={styles.sidebar}
				urls={{
					"/": cn({
						// splash
						[styles.tDark]: step === 0,
						[styles.hSalmonAlt]: step === 0,
						// story
						[styles.tSalmon]: step === 1,
						[styles.hMedium]: step === 1
					}),
					"/portfolio": cn(styles.aFilters, styles.tDark, styles.hSalmon),
					"/portfolio/*": cn(styles.aReturn, styles.tDark, styles.hSalmon),
					"/about": cn(styles.tDark, styles.hSalmonAlt), 
					"/policy-copyrights": cn(styles.tDark, styles.hMedium)
				}}
				>
				<a
					class={cn(styles.logo, {
						[styles.large]: forceNav
					})}
					href="/"
					title="home"
					onMouseEnter={this.handleShowNav}
					onMouseLeave={this.handleHideNav}
					>
					<Logo />
				</a>
				<div
					class={cn(styles.navShow, {
						[styles.disabled]: forceNav
					})}
					onMouseEnter={this.handleShowNav}
					onMouseLeave={this.handleHideNav}
					>
					show menu
				</div>
				<nav
					class={cn(styles.nav, {
						[styles.active]: forceNav
					})}
					onMouseEnter={this.handleShowNav}
					onMouseLeave={this.handleHideNav}
					>
					<Link
						class={styles.link}
						activeClassName={styles.active}
						href="/portfolio"
						title="portfolio"
						>
						portfolio
					</Link>
					<Link
						class={styles.link}
						activeClassName={styles.active}
						href="/about"
						title="about"
						>
						about
					</Link>
					<Link
						class={cn(styles.link, styles.footer)}
						href="/policy-copyrights"
						title="policy & copyrights"
						>
						policy & copyrights
					</Link>
				</nav>

				<nav class={styles.filters}>
					<Filters />
				</nav>

				<a
					class={styles.return}
					href="/portfolio"
					title="return to projects"
					>
					return to projects
				</a>
			</Radiv>
		)
	}
}
