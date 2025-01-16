import { PortManager } from '@antv/x6/lib/model/port';
import { Actor } from '../Base/Actor';

type GenerateOptions = {
    width: number;
    port?: Array<Port>;
};

type Port = {
    type: 'Input' | 'Output';
    id: string;
    label: string;
    row: number;
};
namespace TGenerate {
    export function Generate(options: GenerateOptions) {
        return function <T extends new (...args: Array<any>) => Actor>(C: T) {
            return class extends C {
                constructor(...args: Array<any>) {
                    super(...args);
                    this.TGenerate_Generate_Create();
                }

                private TGenerate_Generate_Create() {
                    const i = (options.port || []).map((p) => p.row + 1);
                    const maxR = Math.max(...i);
                    this.body = this.ctx.Graph.graph.addNode({
                        shape: C.name,
                        x: ~~(Math.random() * 100),
                        y: ~~(Math.random() * 100),
                        width: options.width,
                        height: 45 + maxR * 25,
                        ports: {
                            groups: {
                                Input: {
                                    attrs: {
                                        circle: {
                                            r: 6,
                                            magnet: true,
                                            stroke: '#cccccc',
                                            strokeWidth: 2,
                                            fill: '#80dd80'
                                        },
                                        text: {
                                            fontSize: 14,
                                            fill: '#80dd80'
                                        }
                                    },
                                    position: {
                                        name: 'absolute'
                                    },
                                    label: {
                                        position: 'right'
                                    }
                                },
                                Output: {
                                    attrs: {
                                        circle: {
                                            r: 6,
                                            magnet: true,
                                            stroke: '#cccccc',
                                            strokeWidth: 2,
                                            fill: '#2b7ea5'
                                        },
                                        text: {
                                            fontSize: 14,
                                            fill: '#2b7ea5'
                                        }
                                    },
                                    position: {
                                        name: 'absolute'
                                    },
                                    label: {
                                        position: 'left'
                                    }
                                }
                            },
                            items: (options.port || []).map((p) => {
                                return {
                                    id: p.id,
                                    group: p.type,
                                    args: { x: p.type === 'Output' ? options.width - 20 : 20, y: 50 + p.row * 25 },
                                    attrs: {
                                        text: { text: p.label }
                                    }
                                } as unknown as PortManager.PortMetadata[];
                            })
                        }
                    });
                    this.ctx.Graph.Add(this);
                }
            };
        };
    }
}

export { TGenerate };
