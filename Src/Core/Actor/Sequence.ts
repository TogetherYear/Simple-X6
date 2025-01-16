import { Edge } from '@antv/x6';
import { Actor } from '../Base/Actor';
import { Blueprint } from '../type';
import { TGenerate } from '../Decorators/TGenerate';

@TGenerate.Generate({
    width: 180,
    height: 60,
    port: [{ id: 'SequenceInputRoot', type: 'Input', label: '序列', row: 0 }]
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
