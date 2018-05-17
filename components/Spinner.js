export default {
    props: ["speed"],
    computed: {
        animationStyle() {
            return { animation: `spinning ${this.speed}ms infinite linear`}
        }
    },
    template: `
        <g :style="animationStyle">
            <slot />
        </g>
    `
};