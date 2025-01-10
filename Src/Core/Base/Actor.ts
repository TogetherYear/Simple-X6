import { TTest } from '@/Core/Decorators/TTest';
import { Blueprint } from '../type';
import { TEntity } from './Entity';
import { TTool } from '@/Core/Decorators/TTool';
import { TEvent } from '@/Core/Decorators/TEvent';
import * as X6 from '@antv/x6';

@TTest.Generate()
@TTool.Generate()
@TEvent.Generate()
class Actor extends TEntity {
    constructor(ctx: Blueprint.Context, options: Blueprint.Base.IActor = {}) {
        super(ctx, options);
    }

    public body!: X6.Node;

    public get O() {
        return this.options as Blueprint.Base.IActor;
    }

    /**
     * 继承时 销毁物体必须调用 super.Destroy() 我要取消事件
     */
    public Destroy() {}
}

export { Actor };
