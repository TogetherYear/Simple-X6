import { Graph } from './Manager/Graph';

namespace Blueprint {
    export namespace Base {
        export interface IEntity {}

        export interface IActor extends IEntity {}

        export interface IManager extends IEntity {}
    }

    export namespace Manager {
        export interface IGraph extends Base.IManager {}
    }

    export namespace Actor {
        export interface IGenerate extends Base.IEntity {}
    }

    export type Context = {
        dom: HTMLElement;
        Graph: Graph;
        /**
         * 页面销毁时调用
         */
        Destroy: () => void;
    };
}

export { Blueprint };
