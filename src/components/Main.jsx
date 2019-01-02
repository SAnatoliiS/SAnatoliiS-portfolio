import React, { Component } from 'react'
import Header from './Header.jsx'
import Description from '../containers/Description'
import Controls from '../containers/Controls'
import ItemList from '../containers/ItemList'
import AddingItem from '../containers/AddingItem'
import ChosenItem from '../containers/ChosenItem'

export class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Description />
        <Controls />
        <ItemList />
        <AddingItem />
        <ChosenItem />
      </div>
    )
  }
}

export default Main
