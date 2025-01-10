import { onMounted, onUnmounted } from 'vue';

class Body {
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

export { Body };
