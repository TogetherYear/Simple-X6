import { Edge } from '@antv/x6';
import { Actor } from '../Base/Actor';
import { Blueprint } from '../type';
import { TGenerate } from '../Decorators/TGenerate';

@TGenerate.Generate({
    width: 180,
    port: [
        { id: 'SequenceInputRoot', type: 'Input', label: '序列', row: 0 },
        { id: 'SequenceOutput_0', type: 'Output', label: '执行_0', row: 0 },
        { id: 'SequenceOutput_1', type: 'Output', label: '执行_1', row: 1 },
        { id: 'SequenceOutput_2', type: 'Output', label: '执行_2', row: 2 },
        { id: 'SequenceOutput_3', type: 'Output', label: '执行_3', row: 3 },
        { id: 'SequenceOutput_4', type: 'Output', label: '执行_4', row: 4 },
        { id: 'SequenceOutput_5', type: 'Output', label: '执行_5', row: 5 }
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
