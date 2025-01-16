import { TTest } from '@/Core/Decorators/TTest';
import { Blueprint } from '../type';
import { Entity } from './Entity';
import { TTool } from '@/Core/Decorators/TTool';
import { TEvent } from '@/Core/Decorators/TEvent';
import * as X6 from '@antv/x6';

@TTest.Generate()
@TTool.Generate()
@TEvent.Generate()
class Actor extends Entity {
    constructor(ctx: Blueprint.Context, options: Blueprint.Base.IActor = {}) {
        super(ctx, options);
    }

    public body!: X6.Node;

    public get O() {
        return this.options as Blueprint.Base.IActor;
    }

    public Destroy() {
        this.ctx.Graph.Remove(this);
    }

    public OnEdgeConnected(e: X6.Edge) {}
}

export { Actor };
