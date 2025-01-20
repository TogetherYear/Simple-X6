import { PortManager } from '@antv/x6/lib/model/port';
import { Actor } from '../Base/Actor';

type GenerateOptions = {
    width: number;
    port?: Array<Port>;
};

type Port = {
    type: 'Input:Port' | 'Output:Port' | 'Input:Port:Value' | 'Output:Port:Value';
    id: string;
    label: string;
    row: number;
};
namespace TGenerate {
    // #5f0811
    const group: {
        [name: string]: PortManager.GroupMetadata;
    } = {
        'Input:Port': {
            attrs: {
                circle: {
                    r: 5,
                    magnet: true,
                    stroke: '#dddddd',
                    strokeWidth: 3,
                    fill: '#dddddd00'
                },
                text: {
                    fontSize: 14,
                    fill: '#dddddd'
                }
            },
            position: {
                name: 'absolute'
            },
            label: {
                position: 'right'
            }
        },
        'Input:Port:Value': {
            attrs: {
                circle: {
                    r: 4,
                    magnet: true,
                    stroke: '#27d827',
                    strokeWidth: 2,
                    fill: '#27d827'
                },
                text: {
                    fontSize: 14,
                    fill: '#dddddd'
                }
            },
            position: {
                name: 'absolute'
            },
            label: {
                position: 'right'
            }
        },
        'Output:Port': {
            attrs: {
                circle: {
                    r: 5,
                    magnet: true,
                    stroke: '#dddddd',
                    strokeWidth: 3,
                    fill: '#dddddd00'
                },
                text: {
                    fontSize: 14,
                    fill: '#dddddd'
                }
            },
            position: {
                name: 'absolute'
            },
            label: {
                position: 'left'
            }
        },
        'Output:Port:Value': {
            attrs: {
                circle: {
                    r: 4,
                    magnet: true,
                    stroke: '#0ea4e9',
                    strokeWidth: 2,
                    fill: '#0ea4e9'
                },
                text: {
                    fontSize: 14,
                    fill: '#dddddd'
                }
            },
            position: {
                name: 'absolute'
            },
            label: {
                position: 'left'
            }
        }
    };
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
                            groups: group,
                            items: (options.port || []).map((p) => {
                                return {
                                    id: `${p.type}:${p.id}`,
                                    group: p.type,
                                    args: { x: p.type === 'Output:Port' || p.type === 'Output:Port:Value' ? options.width - 20 : 20, y: 50 + p.row * 25 },
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
