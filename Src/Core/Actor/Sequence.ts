import { Edge } from '@antv/x6';
import { Actor } from '../Base/Actor';
import { Blueprint } from '../type';
import { TGenerate } from '../Decorators/TGenerate';

@TGenerate.Generate({
    width: 180,
    port: [
        { id: 'InputPort:Root', type: 'InputPort', label: '入口', row: 0 },
        { id: 'OutputPort:0', type: 'OutputPort', label: '出口_0', row: 0 },
        { id: 'OutputPort:1', type: 'OutputPort', label: '出口_1', row: 1 },
        { id: 'OutputPort:2', type: 'OutputPort', label: '出口_2', row: 2 },
        { id: 'OutputPort:3', type: 'OutputPort', label: '出口_3', row: 3 },
        { id: 'OutputPort:4', type: 'OutputPort', label: '出口_4', row: 4 },
        { id: 'OutputPort:5', type: 'OutputPort', label: '出口_5', row: 5 }
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
