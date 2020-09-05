import NZInfo from "@/nzinfo";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./app.scss";

export default function App() {

  return (
    <Router>
      <Switch>
        <Route path="/nz">
          <NZInfo/>
        </Route>
        <Route path="/">
          <div id="App">
            <div id="Header">React Boilerplate</div>
            <h1 id="Title">Welcome</h1>
            <div id="Content">
              <div className="box" id="MainContent">
                <p>Hello,</p>
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                   et
                   dolore magna aliqua. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Id nibh tortor
                   id
                   aliquet lectus proin nibh nisl. Libero enim sed faucibus turpis in eu mi. Massa sed elementum tempus
                   egestas sed sed. Risus feugiat in ante metus dictum at tempor commodo ullamcorper. Ornare quam
                   viverra
                   orci sagittis eu. Eu facilisis sed odio morbi quis. Nibh tellus molestie nunc non blandit.
                   Pellentesque
                   elit ullamcorper dignissim cras tincidunt lobortis feugiat. Tellus rutrum tellus pellentesque eu
                   tincidunt. Feugiat pretium nibh ipsum consequat nisl. Ut venenatis tellus in metus. In hac habitasse
                   platea dictumst vestibulum. Dictum fusce ut placerat orci nulla. Sed faucibus turpis in eu mi
                   bibendum
                   neque egestas congue.

                   Adipiscing elit pellentesque habitant morbi tristique senectus et. Eros donec ac odio tempor orci
                   dapibus. Dignissim suspendisse in est ante in nibh. Maecenas pharetra convallis posuere morbi leo
                   urna.
                   Ultricies mi eget mauris pharetra. Risus nullam eget felis eget nunc lobortis mattis aliquam.
                   Porttitor
                   lacus luctus accumsan tortor posuere ac ut. Auctor urna nunc id cursus metus. Rhoncus dolor purus non
                   enim praesent elementum. Fermentum odio eu feugiat pretium nibh. Consequat id porta nibh venenatis
                   cras
                   sed. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Nunc congue nisi vitae suscipit
                   tellus mauris a diam maecenas. Lectus quam id leo in vitae. Non arcu risus quis varius quam quisque
                   id
                   diam. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Sit amet risus nullam eget
                   felis
                   eget nunc lobortis mattis. Risus viverra adipiscing at in tellus integer feugiat.

                   Sollicitudin aliquam ultrices sagittis orci a scelerisque. Praesent semper feugiat nibh sed pulvinar
                   proin. Tortor posuere ac ut consequat. In ornare quam viverra orci sagittis eu volutpat odio. Nec
                   feugiat
                   in fermentum posuere urna nec. Nulla malesuada pellentesque elit eget. Curabitur vitae nunc sed velit
                   dignissim sodales ut eu sem. Augue ut lectus arcu bibendum. Maecenas sed enim ut sem viverra aliquet
                   eget
                   sit amet. Diam phasellus vestibulum lorem sed risus. Blandit volutpat maecenas volutpat blandit
                   aliquam.
                   Potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Lectus mauris ultrices eros in
                   cursus.
                   Donec enim diam vulputate ut pharetra sit amet aliquam id. At imperdiet dui accumsan sit amet nulla.
                   Vestibulum sed arcu non odio euismod.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                   et
                   dolore magna aliqua. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Id nibh tortor
                   id
                   aliquet lectus proin nibh nisl. Libero enim sed faucibus turpis in eu mi. Massa sed elementum tempus
                   egestas sed sed. Risus feugiat in ante metus dictum at tempor commodo ullamcorper. Ornare quam
                   viverra
                   orci sagittis eu. Eu facilisis sed odio morbi quis. Nibh tellus molestie nunc non blandit.
                   Pellentesque
                   elit ullamcorper dignissim cras tincidunt lobortis feugiat. Tellus rutrum tellus pellentesque eu
                   tincidunt. Feugiat pretium nibh ipsum consequat nisl. Ut venenatis tellus in metus. In hac habitasse
                   platea dictumst vestibulum. Dictum fusce ut placerat orci nulla. Sed faucibus turpis in eu mi
                   bibendum
                   neque egestas congue.

                   Adipiscing elit pellentesque habitant morbi tristique senectus et. Eros donec ac odio tempor orci
                   dapibus. Dignissim suspendisse in est ante in nibh. Maecenas pharetra convallis posuere morbi leo
                   urna.
                   Ultricies mi eget mauris pharetra. Risus nullam eget felis eget nunc lobortis mattis aliquam.
                   Porttitor
                   lacus luctus accumsan tortor posuere ac ut. Auctor urna nunc id cursus metus. Rhoncus dolor purus non
                   enim praesent elementum. Fermentum odio eu feugiat pretium nibh. Consequat id porta nibh venenatis
                   cras
                   sed. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Nunc congue nisi vitae suscipit
                   tellus mauris a diam maecenas. Lectus quam id leo in vitae. Non arcu risus quis varius quam quisque
                   id
                   diam. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Sit amet risus nullam eget
                   felis
                   eget nunc lobortis mattis. Risus viverra adipiscing at in tellus integer feugiat.

                   Sollicitudin aliquam ultrices sagittis orci a scelerisque. Praesent semper feugiat nibh sed pulvinar
                   proin. Tortor posuere ac ut consequat. In ornare quam viverra orci sagittis eu volutpat odio. Nec
                   feugiat
                   in fermentum posuere urna nec. Nulla malesuada pellentesque elit eget. Curabitur vitae nunc sed velit
                   dignissim sodales ut eu sem. Augue ut lectus arcu bibendum. Maecenas sed enim ut sem viverra aliquet
                   eget
                   sit amet. Diam phasellus vestibulum lorem sed risus. Blandit volutpat maecenas volutpat blandit
                   aliquam.
                   Potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Lectus mauris ultrices eros in
                   cursus.
                   Donec enim diam vulputate ut pharetra sit amet aliquam id. At imperdiet dui accumsan sit amet nulla.
                   Vestibulum sed arcu non odio euismod.</p>
              </div>
            </div>
            <footer>Copyright ©{(new Date()).getFullYear()}</footer>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}
