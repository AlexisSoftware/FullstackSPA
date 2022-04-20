import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Stores from './Stores';
import StoreItems from './StoreItems';
import ItemInfo from './ItemInfo';
import NewItem from './CreateNewItem';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/stores" element={<Stores />}>
                <Route path=":store_id" element={<StoreItems />}>
                    <Route path="items/new" element={<ItemInfo />} />
                    <Route path="items/:item_id" element={<NewItem />} />
                </Route>
            </Route>
        </Routes>
    </Router>
);
}

//daggerelf23

export default App;
