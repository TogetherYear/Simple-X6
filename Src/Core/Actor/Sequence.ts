import { Edge } from '@antv/x6';
import { Actor } from '../Base/Actor';
import { Blueprint } from '../type';
import { TGenerate } from '../Decorators/TGenerate';

@TGenerate.Generate({
    width: 180,
    port: [
        { id: 'Input:Root', type: 'Input', label: '入口', row: 0 },
        { id: 'Output:0', type: 'Output', label: '执行_0', row: 0 },
        { id: 'Output:1', type: 'Output', label: '执行_1', row: 1 },
        { id: 'Output:2', type: 'Output', label: '执行_2', row: 2 },
        { id: 'Output:3', type: 'Output', label: '执行_3', row: 3 },
        { id: 'Output:4', type: 'Output', label: '执行_4', row: 4 },
        { id: 'Output:5', type: 'Output', label: '执行_5', row: 5 }
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

    public override OnEdgeConnected(e: Edge) {
        console.log('OnEdgeConnected:', e);
    }
}

export { Sequence };
