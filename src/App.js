import React from 'react'
import {Provider} from 'react-redux'
import Blogs from './components/Blogs';
import Nav from './components/Nav';
import Search from './components/Search';
import store from './redux/store';

function App() {
    return (
       <Provider store={store}>
         <Nav/>
        <Search/>
        <Blogs/>
       </Provider>
    );
}

export default App;
