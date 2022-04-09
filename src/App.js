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
import {updateNewMessage} from "./Redux/state";


const App = (props) => {
    return (
            <div className='app-wrapper'>
                {/*<NameProps name={massive.name} age={massive.age}/>*/}
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/friends" element={<Friends myFriends={props.appState.myFriends}/>}/>
                        <Route path="/dialogs/*" element={<Dialogs dialogsData={props.appState.dialogsPage}
                                                                   newPostMessage={props.appState.dialogsPage.newPostMessage}
                                                                   addMessage={props.addMessage}
                                                                   updateNewMessage={props.updateNewMessage}/>}/>
                        <Route path="/profile" element={<Profile profilePage={props.appState.profilePage}
                                                                 addPost={props.addPost}
                                                                 updateNewPostText={props.updateNewPostText}
                                                                 />}/>
                        <Route path="/music" element={<Music musicData={props.appState.music}/>}/>
                        <Route path="/news" element={<News/>}/>
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
