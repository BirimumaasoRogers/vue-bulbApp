//*This app was built by Birimumaaso Rogers CAT009*//

const bulbApp = {
    data() {
        return {
            appName: "Bulb App",
            bulbImage: false,
            bulbState: "off",
            switchState: "On"
        }
    },
    methods: {
        changeImage() {
            this.bulbImage = !this.bulbImage
            switch (this.bulbState) {
                case "off":
                    this.bulbState = "on";
                    this.switchState = "Off";
                    break;
                case "on":
                    this.bulbState = "off";
                    this.switchState = "On";
                    break;
                default:
                    break;
            }
        }
    }

};
Vue.createApp(bulbApp).mount("#app")