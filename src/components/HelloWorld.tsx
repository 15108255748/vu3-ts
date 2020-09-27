import { defineComponent, ref } from 'vue';


export default defineComponent({
  name: 'HelloWord',
  props: {
    msg: String
  },
  setup(props) {
    let count = ref(0)
    return () => (
      <>
        <div>
          <h1>{props.msg}</h1>
          <h4 class={'text'}>{count.value}</h4>
          <button onClick={() =>
            count.value++
          }>count++</button>
          <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
        </div>
      </>
    );
  }
})