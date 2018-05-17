import Scene from "./components/Scene.js";
import Spinner from './components/Spinner.js'
import Box from "./components/Box.js";
import Spoke from "./components/Spoke.js";
import Spiral from "./components/Spiral.js";
import Shutter from "./components/Shutter.js";

new Vue({
  el: "#app",
  components: { Scene, Spinner, Box, Spoke, Spiral, Shutter },
  data: () => ({ size: 400, speed: 200, speed2: 120, count: 12, radius: 5 }),
  template: `
        <div>
            <h5>Size: {{size}} px</h5>
            <input type="range" v-model="size" max="1000" />
            
            <h5>Speed: {{speed}} ms {{speed/1000}} s</h5>
            <input type="number" v-model="speed" min="0.1" max="5000" step="0.01" />
            <input type="range" v-model="speed" min="0.1" max="5000" step="0.01" />
            
            <button @click="speed = 1800; count = 108">33⅓ RPM</button>
            <button @click="speed = 1333; count = 80">45 RPM</button>


            <!--h5>Speed2: {{speed2}} ms {{speed2/1000}} s</h5>
            <input type="range" v-model="speed2" min="0.001" max="1000" step="0.001" />
            -->

            <h5>Spoke count: {{count}}, degrees: {{360 / count}} </h5>
            <input type="number" v-model="count" max="360" />
            <input type="range" v-model="count" max="360" />
            
            <!--<h5>Radius: {{radius}}</h5>
            <input type="range" v-model="radius" max="720" />-->
            
            <!--Scene :size="size">
                <Spinner :speed="speed" direction="">
                    <Box :size="size / 2" fill="none" />
                </Spinner>
                <Shutter :size="size" :speed2="speed2" />
            </Scene-->

            <!--Scene :size="size">
                <Spinner :speed="speed">
                    <Spiral :size="size / 2" :count="1000" :radius="radius"/>
                </Spinner>
                <Shutter :size="size" :speed2="speed2" />
            </Scene-->

            <Scene :size="size">
                <Spinner :speed="speed">
                    <Spoke :size="size / 2" :count="count" /> 
                </Spinner>
            </Scene>

        </div>
    `
});