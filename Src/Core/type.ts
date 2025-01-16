import { Graph } from './Manager/Graph';
import { Register } from './Manager/Register';

namespace Blueprint {
    export namespace Base {
        export interface IEntity {}

        export interface IActor extends IEntity {}

        export interface IManager extends IEntity {}
    }

    export namespace Manager {
        export interface IGraph extends Base.IManager {}

        export interface IRegister extends Base.IManager {}
    }

    export namespace Actor {
        export interface IStart extends Base.IEntity {}
    }

    export type Context = {
        dom: HTMLElement;
        Graph: Graph;
        Register: Register;
        /**
         * 页面销毁时调用
         */
        Destroy: () => void;
    };
}

export { Blueprint };
