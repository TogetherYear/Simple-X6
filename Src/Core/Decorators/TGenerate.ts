import { Actor } from '../Base/Actor';

namespace TGenerate {
    export function Generate() {
        return function <T extends new (...args: Array<any>) => Actor>(C: T) {
            return class extends C {
                constructor(...args: Array<any>) {
                    super(...args);
                    this.TGenerate_Generate_Create();
                }

                private TGenerate_Generate_Create() {}
            };
        };
    }
}

export { TGenerate };
