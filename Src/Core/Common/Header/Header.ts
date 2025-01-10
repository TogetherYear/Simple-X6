import { onMounted, onUnmounted } from 'vue';

class Header {
    public InitStates() {
        return {};
    }

    public Run() {
        onMounted(() => {});

        onUnmounted(() => {
            this.Destroy();
        });
    }

    public Destroy() {}
}

export { Header };
