import Scene from "./components/Scene.js";
import Spinner from './components/Spinner.js'
import Box from "./components/Box.js";
import Spoke from "./components/Spoke.js";

new Vue({
  el: "#app",
  components: { Scene, Spinner, Box, Spoke },
  data: () => ({ size: 200, speed: 1000, count: 1 }),
  template: `
        <div>
            <h5>Size: {{size}} px</h5>
            <input type="range" v-model="size" max="1000" />
            
            <h5>Speed: {{speed}} ms</h5>
            <input type="range" v-model="speed" max="5000" />
            
            <h5>Spoke count: {{count}}</h5>
            <input type="range" v-model="count" max="720" />
            
            <Scene :size="size">
                <Spinner :speed="speed">
                    <Box :size="size / 2" fill="none" />
                </Spinner>
            </Scene>
            <Scene :size="size">
                <Spinner :speed="speed">
                    <Box :size="size / 2" fill="maroon" />
                </Spinner>
            </Scene>
            <Scene :size="size">
                <Spinner :speed="speed">
                    <Spoke :size="size / 2" :count="count" />
                    <Spoke :size="size / 3" :count="count / 3" />
                </Spinner>
            </Scene>
        </div>
    `
});