import { TTest } from '@/Core/Decorators/TTest';
import { Blueprint } from '../type';
import { TEntity } from './Entity';
import { TTool } from '@/Core/Decorators/TTool';
import { TEvent } from '@/Core/Decorators/TEvent';

@TTest.Generate()
@TTool.Generate()
@TEvent.Generate()
class Manager extends TEntity {
    constructor(ctx: Blueprint.Context, options: Blueprint.Base.IManager = {}) {
        super(ctx, options);
    }

    public get O() {
        return this.options as Blueprint.Base.IManager;
    }

    /**
     * 继承时 销毁物体必须调用 super.Destroy() 我要取消事件
     */
    public Destroy() {}
}

export { Manager };
