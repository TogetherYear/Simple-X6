import { Resolve } from '@/Core/Decorators';
import { Manager } from '../Base/Manager';
import { Blueprint } from '../type';
import * as X6 from '@antv/x6';
import { TTest } from '@/Core/Decorators/TTest';

import { Start } from '../Actor/Start';
import { Actor } from '../Base/Actor';
import { Sequence } from '../Actor/Sequence';
import { Branch } from '../Actor/Branch';
import { Boolean } from '../Actor/Boolean';

class Graph extends Manager {
    constructor(ctx: Blueprint.Context, options: Blueprint.Manager.IGraph = {}) {
        super(ctx, options);
    }

    public graph!: X6.Graph;

    private actors = new Map<string, Actor>();

    public get O() {
        return this.options as Blueprint.Manager.IGraph;
    }

    public Run() {
        this.graph = new X6.Graph({
            container: this.ctx.dom,
            autoResize: true,
            panning: true,
            mousewheel: true,
            background: {
                color: '#212121'
            },
            grid: {
                visible: true,
                size: 10,
                type: 'doubleMesh',
                args: [
                    {
                        color: '#333333',
                        thickness: 1
                    },
                    {
                        color: '#000000',
                        thickness: 1,
                        factor: 10
                    }
                ]
            },
            highlighting: {
                default: {
                    name: 'stroke',
                    args: {
                        padding: 0,
                        attrs: {
                            'stroke-width': 4,
                            stroke: '#dd8080'
                        }
                    }
                }
            },
            connecting: {
                connector: {
                    name: 'smooth'
                },
                snap: {
                    radius: 15
                },
                allowBlank: false,
                allowNode: false,
                allowMulti: false,
                allowLoop: false,
                allowEdge: false,
                allowPort: true,
                createEdge() {
                    const edge = new X6.Shape.Edge();
                    edge.setAttrs({
                        line: {
                            stroke: '#ffffff',
                            strokeWidth: 2,
                            sourceMarker: {
                                name: ''
                            },
                            targetMarker: {
                                name: ''
                            }
                        }
                    });
                    return edge;
                },
                validateEdge(e) {
                    //@ts-ignore
                    const temp = `${e.edge.source.port}-${e.edge.target.port}`;
                    if ((temp.indexOf('OutputPort') !== -1 && temp.indexOf('InputPort') !== -1) || (temp.indexOf('OutputValuePort') !== -1 && temp.indexOf('InputValuePort') !== -1)) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        });

        this.ListenEvent();

        Resolve.then(() => {
            this.graph.centerContent();
        });
    }

    private ListenEvent() {
        this.ListenEdge();
    }

    private ListenEdge() {
        this.graph.on('edge:connected', (e) => {
            //@ts-ignore
            this.actors.get(e.edge.source.cell)?.OnEdgeConnectedAsSource(e.edge);
            //@ts-ignore
            this.actors.get(e.edge.target.cell)?.OnEdgeConnectedAsTarget(e.edge);
        });
    }

    public override Destroy() {
        super.Destroy();
        this.graph.dispose();
    }

    @TTest.BindFunction('Start')
    private AddStart() {
        const n = new Start(this.ctx);
    }

    @TTest.BindFunction('Sequence')
    private AddSequence() {
        const n = new Sequence(this.ctx);
    }

    @TTest.BindFunction('Branch')
    private AddBranch() {
        const n = new Branch(this.ctx);
    }

    @TTest.BindFunction('Boolean')
    private AddBoolean() {
        const n = new Boolean(this.ctx);
    }

    public Add(actor: Actor) {
        this.actors.set(actor.body.id, actor);
    }

    public Remove(actor: Actor) {
        this.actors.delete(actor.body.id);
    }
}

export { Graph };
