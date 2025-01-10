import { Actor } from '../Base/Actor';
import { Blueprint } from '../type';

class Generate extends Actor {
    constructor(ctx: Blueprint.Context, options: Blueprint.Actor.IGenerate = {}) {
        super(ctx, options);
        this.Create();
    }

    public get O() {
        return this.options as Blueprint.Actor.IGenerate;
    }

    private Create() {
        this.body = this.ctx.Graph.graph.addNode({
            shape: 'Generate',
            x: ~~(Math.random() * 100),
            y: ~~(Math.random() * 100)
        });
    }

    public override Destroy(): void {
        super.Destroy();
        this.body.dispose();
    }
}

export { Generate };
