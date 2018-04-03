import {h, Component} from "preact"

import cn from "classnames"

import View from "components/view"

import styles from "./style"

import Avatar from "images/avatar.png"

export default class About extends Component {
	render() {
		return (
			<View>
				<div class={styles.view}>
					<div class={styles.avatar}>
						<img src={Avatar} />
					</div>
					<h2>about me</h2>
					<h1 class={styles.copy}>I’m Greg Bak (Grzegorz Bąk)</h1>
					<p class={styles.copy}>I’m a 23 year old Software Engineer and a self-taught CGI generalist based in Poland. Currently I'm in the middle of my Master's degree (Computer Science) and I'll graduate in February 2019. I work as a fullstack lead developer at Crafton. In my free time I learn languages, climb rocks and sing in a chamber choir (check it out). Unfortunately, I'm unable to perform all of that at the same time.</p>
					<p class={styles.copy}>Being heavily influenced by the Japanese culture, I strive for the balance of precise technical thinking and artistic mindset.</p>

					<h2 class={styles.smallDip}>my timeline</h2>
					<ul class={styles.timeline}>
						<li>
							<p class={styles.date}>7.1994</p>
							<h3 class={styles.title}>earth arrival</h3>
						</li>
						<li>
							<p class={styles.date}>7.2011&mdash;2013</p>
							<h3 class={styles.title}>concept 3d artist and animator</h3>
							<a class={styles.location} href="https://www.unvanquished.net">@Unvanquished Development <span>(https://www.unvanquished.net)</span></a>
						</li>
						<li>
							<p class={styles.date}>6.2012&mdash;10.2013</p>
							<h3 class={styles.title}>volunteer UI translator (polish team)</h3>
							<a class={styles.location} href="https://www.blender.org">@Blender Institute <span>(https://www.blender.org)</span></a>
						</li>
						<li>
							<p class={styles.date}>10.2013&mdash;3.2017</p>
							<h3 class={styles.title}>Bachelor of Engineering, Computer Science</h3>
							<div class={styles.location}>@Adam Mickiewicz University, Poznań</div>
						</li>
						<li>
							<p class={styles.date}>4.2014&mdash;10.2014</p>
							<h3 class={styles.title}>junior backend developer</h3>
							<a class={styles.location} href="http://e-kwarta.pl">@Kwarta <span>(http://e-kwarta.pl)</span></a>
						</li>
						<li>
							<p class={styles.date}>10.2014&mdash;10.2015</p>
							<h3 class={styles.title}>design and fullstack developer (freelance)</h3>
							<a class={styles.location} href="http://www.da.poznan.dominikanie.pl">@DA Dominikanie <span>(http://www.da.poznan.dominikanie.pl)</span></a>
						</li>
						<li>
							<p class={styles.date}>7.2015&mdash;5.2016</p>
							<h3 class={styles.title}>junior frontend developer</h3>
							<a class={styles.location} href="http://uxdream.com">@UX Dream <span>(http://uxdream.com)</span></a>
						</li>
						<li>
							<p class={styles.date}>9.2016&mdash;1.2017</p>
							<h3 class={styles.title}>design and fullstack developer (freelance)</h3>
							<a class={styles.location} href="http://fundamentum.com.pl">@Fundamentum <span>(http://fundamentum.com.pl)</span></a>
						</li>
						<li>
							<p class={styles.date}>5.2017&mdash;now</p>
							<h3 class={styles.title}>fullstack web developer</h3>
							<a class={styles.location} href="http://crafton.com">@Crafton <span>(http://crafton.com)</span></a>
						</li>
						<li>
							<p class={styles.date}>102017&mdash;now</p>
							<h3 class={styles.title}>Master of Engineering, Computer Science</h3>
							<div class={styles.location}>@Adam Mickiewicz University, Poznań</div>
						</li>
					</ul>

					<h2 class={styles.bigDip}>my skills</h2>
					<ul class={styles.skills}>
						<h3>operating systems</h3>
						<li class={styles.expert}>macOS</li>
						<li class={styles.advanced}>UNIX</li>
						<li class={styles.advanced}>Windows</li>
					</ul>
					<ul class={styles.skills}>
						<h3>web stack</h3>
						<li class={styles.expert}>SASS</li>
						<li class={styles.advanced}>React/Preact with Redux</li>
						<li class={styles.advanced}>ES7</li>
						<li class={styles.intermediate}>SQL</li>
					</ul>
					<ul class={styles.skills}>
						<h3>code</h3>
						<li class={styles.advanced}>Golang</li>
						<li class={styles.intermediate}>Python</li>
						<li class={styles.intermediate}>C#, C++</li>
						<li class={cn(styles.intermediate, styles.butwhytho)}>PHP</li>
					</ul>
					<ul class={styles.skills}>
						<h3>graphics</h3>
						<li class={styles.expert}>Photoshop</li>
						<li class={styles.advanced}>Blender with Cycles</li>
						<li class={styles.learning}>Substance Painter</li>
						<li class={styles.learning}>Marvelous Designer</li>
					</ul>
					<ul class={styles.skills}>
						<h3>languages</h3>
						<li class={styles.expert}>Polish</li>
						<li class={styles.advanced}>English</li>
						<li class={styles.intermediate}>German</li>
						<li class={styles.basic}>Japanese</li>
						<li class={cn(styles.basic, styles.loremipsum)}>Latin</li>
					</ul>
				</div>
				<div class={styles.theEnd}>
					<div class={styles.center}>
						<h2>Thanks for stopping by!</h2>
						<p>
							If you want to say hello or ask a question,<br/>
							feel free to contact me at <a href="mailto:gregbak@me.com" title="my contact email">gregbak@me.com</a>
						</p>
					</div>
				</div>
			</View>
		)
	}
}