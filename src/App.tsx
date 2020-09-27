// import { defineComponent } from 'vue';
import HelloWorld from "./components/HelloWorld";
import Logo from './assets/images/logo.png'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    return () => (
      <>
        <div>
          <img class={['img']} alt="Vue logo" src={Logo} />
          <HelloWorld msg="Hello Vue 3.0 + Vite" />
        </div>
      </>
    );
  }
}