import { EventSystem } from '@/Core/Utils/EventSystem';
import { Time } from '@/Core/Utils/Time';
import { Blueprint } from '../type';

abstract class Entity extends EventSystem {
    constructor(ctx: Blueprint.Context, options: Blueprint.Base.IEntity = {}) {
        super();
        this.ctx = ctx;
        this.options = options;
    }

    public get O() {
        return this.options as Blueprint.Base.IEntity;
    }

    public ctx!: Blueprint.Context;

    public options!: Blueprint.Base.IEntity;

    /**
     * 唯一ID
     */
    public unique_Id = Time.GenerateRandomUid();
}

export { Entity };
