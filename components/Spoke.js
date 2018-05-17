import { cx, cy } from '../utils.js'

export default {
  props: ["size", "count"],
  methods: { cx, cy },
  template: `
        <g>
            <line
                v-for="(item, index) in Array.from({length: 720}).slice(0,count)"
                x1="0"
                y1="0"
                :y2="cx(360 / count * index,size)"
                :x2="cy(360 / count * index,size)"
                stroke="rgba(0,0,0,0.5)"
            />
        </g>
    `
};
