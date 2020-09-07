import {
	useState,
	useEffect,
} from "preact/hooks"
import {connect} from "react-redux"

import {getProjects} from "actions/projects"
import {randomOf} from "globals"

import View from "components/view"
import Mun from "components/mun"
import Tile from "components/tile"

import SS from "smooth-scroll"
import cn from "classnames"
import style from "./style"

const Home = ({projects, getProjects, page, handleSidebar}) => {
	const [altMoon, toggleMoon] = useState(false)
	const [project, setProject] = useState(false)
	useEffect(() => {
		if (projects.length === 0) getProjects()

		const ss = new SS("a[href*='#']")
		window.addEventListener("scroll", onScroll)
		return () => {
			window.removeEventListener("scroll", onScroll)
		}
	}, [])
	useEffect(() => {
		const randomProject = randomOf(projects)
		setProject(randomProject)
	}, [projects])

	const onScroll = e => {
		const maxHeight = document.querySelector("#view").clientHeight
		const windowHeight = window.innerHeight
		const currentHeight = window.scrollY

		let currentStep = Math.round(currentHeight/windowHeight -.001)
		currentStep = currentStep > 0 ? currentStep : 0

		if (currentStep !== page) {
			toggleMoon(currentStep)
			handleSidebar(currentStep)
		}
	}

	return (
		<View
			title="Greg Bak"
			id="view"
			class={style.view}
			>
			<section class={style.section}>
				<div class={style.mountain} />
				<h1 class={style.cta}>
					<span class={style.word1}>i am</span>
					<span class={style.word2}>Greg</span>
					<span class={style.word3}>a creative software engineer and an artist from the other</span>
					<span class={style.word4}>world.</span>
				</h1>
				<a
					class={style.more}
					href="#story"
					>
					what i do
				</a>
				<Mun altStyle={altMoon} />
			</section>
			<section id="story" class={cn(style.section, style.dark)}>
				<div class={style.story}>
					<div class={style.text}>
						<h2>
							Hi, 
							<span>Welcome!</span>
						</h2> 
						<p>6 years ago I started my adventure looking for the perfect button and I'm not going back. Having worked both freelance and corporate, I've experienced different approaches and helped developing many good practices. Be it sculpting an art-focused newspaper or developing in the dynamic environment of cryptocurrency trading platforms, I can't get enough of beatiful, yet simple designs. But all that will be meaningless without keeping the end user in mind.</p> 
						<p>Yet, in free time I play a lot with CGI and dwell in the uncanny valley – You'll find here my personal experiments and ideas that I finished over the time.</p>
						<p>Click the tile <span class={style.horizontal}>on your right</span><span class={style.vertical}>below</span>.</p>
					</div>
					{project && (
						<Tile
							overrideClass={style.tile}
							project={project}
							/>
					)}
				</div>
			</section>
		</View>
	)
}

const stateProps = (state, props) => ({
	projects: state.projects.list,
})
const dispatchProps = (dispatch, props) => ({
	getProjects: () => dispatch(getProjects())
})

export default connect(stateProps, dispatchProps)(Home)