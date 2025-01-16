import { TTest } from '@/Core/Decorators/TTest';
import { Blueprint } from '../type';
import { Entity } from './Entity';
import { TTool } from '@/Core/Decorators/TTool';
import { TEvent } from '@/Core/Decorators/TEvent';

@TTest.Generate()
@TTool.Generate()
@TEvent.Generate()
class Manager extends Entity {
    constructor(ctx: Blueprint.Context, options: Blueprint.Base.IManager = {}) {
        super(ctx, options);
    }

    public get O() {
        return this.options as Blueprint.Base.IManager;
    }

    public Destroy() {}
}

export { Manager };
