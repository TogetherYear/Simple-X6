import { Edge } from '@antv/x6';
import { Actor } from '../Base/Actor';
import { Blueprint } from '../type';
import { TGenerate } from '../Decorators/TGenerate';

@TGenerate.Generate({
    width: 180,
    port: [
        { id: 'Root', type: 'Input:Port', label: '入口', row: 0 },
        { id: '0', type: 'Output:Port', label: '出口_0', row: 0 },
        { id: '1', type: 'Output:Port', label: '出口_1', row: 1 },
        { id: '2', type: 'Output:Port', label: '出口_2', row: 2 },
        { id: '3', type: 'Output:Port', label: '出口_3', row: 3 },
        { id: '4', type: 'Output:Port', label: '出口_4', row: 4 },
        { id: '5', type: 'Output:Port', label: '出口_5', row: 5 }
    ]
})
class Sequence extends Actor {
    constructor(ctx: Blueprint.Context, options: Blueprint.Actor.ISequence = {}) {
        super(ctx, options);
    }

    public get O() {
        return this.options as Blueprint.Actor.ISequence;
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

export { Sequence };
