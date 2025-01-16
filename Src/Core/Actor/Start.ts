import { Edge } from '@antv/x6';
import { Actor } from '../Base/Actor';
import { Blueprint } from '../type';
import { TGenerate } from '../Decorators/TGenerate';

@TGenerate.Generate({
    width: 180,
    port: [{ id: 'Output:Root', type: 'Output', label: '初始化', row: 0 }]
})
class Start extends Actor {
    constructor(ctx: Blueprint.Context, options: Blueprint.Actor.IStart = {}) {
        super(ctx, options);
    }

    public get O() {
        return this.options as Blueprint.Actor.IStart;
    }

    public override Destroy(): void {
        super.Destroy();
        this.body.dispose();
    }

    public override OnEdgeConnected(e: Edge) {
        console.log('OnEdgeConnected:', e);
    }
}

export { Start };
