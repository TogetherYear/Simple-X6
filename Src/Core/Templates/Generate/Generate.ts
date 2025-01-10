import { onMounted, onUnmounted } from 'vue';

class Generate {
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

export { Generate };
