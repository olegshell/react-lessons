import React from "react";
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs'
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import {updateNewMessage} from "./Redux/store";
import FriendsContainer from "./components/Friends/FriendsContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import MusicContainer from "./components/Music/MusicContainer";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            {/*<NameProps name={massive.name} age={massive.age}/>*/}
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>

                    {/*<Route path="/friends" element={<FriendsContainer*/}
                    {/*    // appMyFriendsStore={props.store}*/}
                    {/*/>}*/}
                    {/*/>*/}

                    <Route path="/dialogs/*" element={<DialogsContainer
                        // dialogsStore={props.store}
                        //dispatch={props.dispatch}
                        // store={props.store}
                    />}
                    />

                    <Route path="/profile" element={<Profile
                        // stateProfilePage={props.store}
                        // dispatch={props.dispatch}
                        // updateNewPostText={props.updateNewPostText}
                    />}/>

                    {/*<Route path="/music" element={<MusicContainer*/}
                    {/*    // appMusicStore={props.store}*/}
                    {/*/>}*/}
                    {/*/>*/}

                    <Route path="/news" element={<News
                        //languagesFromIndex={props.languages}
                    />}/>

                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    )


}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
