import { Manager } from '../Base/Manager';
import { Blueprint } from '../type';
import { register } from '@antv/x6-vue-shape';
const components = import.meta.glob('@/Core/Templates/**/*.vue');

class Register extends Manager {
    constructor(ctx: Blueprint.Context, options: Blueprint.Manager.IRegister = {}) {
        super(ctx, options);
    }

    public get O() {
        return this.options as Blueprint.Manager.IRegister;
    }

    public async Run(): Promise<void> {
        return new Promise((resolve, reject) => {
            const load: Array<Promise<void>> = [];
            for (let key in components) {
                const shape = key.split('/').slice(-2)[0];
                load.push(
                    components[key]().then((res: any) => {
                        register({
                            shape,
                            component: res.default
                        });
                    })
                );
            }
            Promise.all(load).then(() => {
                resolve();
            });
        });
    }

    public override Destroy() {
        super.Destroy();
    }
}

export { Register };
