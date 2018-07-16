import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text, number, boolean, select, color} from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import {ThemeSelector} from "../../../addons/ThemeSwitcher";

import {Hero, Social} from '../../../components';
import Readme from '../../../components/Hero/README.md';

const stories = storiesOf('Components/Hero', module);

const buttons = [{
	text: "TELL ME MORE",
	onClick: ({button}) => {
		alert(`You has clicked ${button.text}`)
	}
}];

stories.addDecorator(withKnobs);

stories.add('Default', withReadme([Readme], () => {
	return (
		<ThemeSelector>
			<Hero
				isFixed={boolean("Fixed", true)}
				isCentered={boolean("Centered", true)}
				particles={boolean("With particles", true)}
				image={text("Image", "https://front10.com/img/header-bg.jpg")}
				opacity={number("Opacity", 1)}
				parallaxOffset={number("Parallax offset", 0)}
				overlayColor={color("Overlay color", "#d43131", "GROUP-ID1")}
				minHeight={text("Min height", "100vh")}
				header={text("Header", "REACT & ANGULARJS COMPONENTS")}
				subHeader={text("Sub header", "Leverage your process!")}
				subHeaderPosition={select("Sub header position", {"top": "top", "bottom": "bottom"}, "top")}
				buttons={buttons}
				particlesParams={{"move": {"speed": 2}}}
			/>
		</ThemeSelector>
	);
}));

stories.add('Children', withReadme([Readme], () => {
	return (
		<ThemeSelector>
			<Hero
				isFixed={boolean("Fixed", true)}
				isCentered={boolean("Centered", true)}
				particles={boolean("With particles", true)}
				image={text("Image", "https://front10.com/img/header-bg.jpg")}
				opacity={number("Opacity", 1)}
				parallaxOffset={number("Parallax offset", 0)}
				overlayColor={color("Overlay color", "#d43131", "GROUP-ID1")}
				minHeight={text("Min height", "100vh")}
				particlesParams={{"move": {"speed": 2}}}>
				<div className="container">
					<img
						className="w-25"
						alt="Cool car"
						src="https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Html-512.png"/>
					<h1 className="display-3 text-white">Landing Page Book</h1>
					<div className="mb-5 mt-5">
						<a href="https://front10.com/" className="btn btn-primary btn-lg pl-5 pr-5 pt-2 pb-2">
							Go now
						</a>
					</div>
					<Social
						type="facebook"
						url="https://landing-page-book.front10.com/"
					/>
					<Social
						type="twitter"
						url="https://landing-page-book.front10.com/"
					/>
					<Social
						type="linkedin"
						url="https://landing-page-book.front10.com/"
					/>
				</div>
			</Hero>
		</ThemeSelector>
	);
}));