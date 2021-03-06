import React, { Component } from 'react';
import Header from './Header.jsx';
import Description from '../containers/Description';
import Controls from '../containers/Controls';
import ItemList from '../containers/ItemList';
import NewItem from '../containers/NewItem';
import ChosenItem from '../containers/ChosenItem';

export class Main extends Component {
	render() {
		return (
			<div>
				<div className="header-container">
					<div className="content-container">
						<Header />
					</div>
				</div>
				<div className="main">
					<div className="content-container">
						<Description />
						<Controls />
						<ItemList />
						<NewItem />
						<ChosenItem />
					</div>
				</div>
			</div>
		);
	}
}

export default Main;
