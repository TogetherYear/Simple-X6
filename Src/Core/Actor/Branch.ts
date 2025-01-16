import { Edge } from '@antv/x6';
import { Actor } from '../Base/Actor';
import { Blueprint } from '../type';
import { TGenerate } from '../Decorators/TGenerate';

@TGenerate.Generate({
    width: 180,
    port: [
        { id: 'Input:Root', type: 'InputPort', label: '入口', row: 0 },
        { id: 'Input:Boolean', type: 'InputValuePort', label: 'Boolean', row: 1 }
    ]
})
class Branch extends Actor {
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

    public override OnEdgeConnectedAsSource(e: Edge) {
        console.log('OnEdgeConnectedAsSource:', e);
    }

    public override OnEdgeConnectedAsTarget(e: Edge) {
        console.log('OnEdgeConnectedAsTarget:', e);
    }
}

export { Branch };
