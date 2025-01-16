import { Resolve } from '@/Core/Decorators';
import { Manager } from '../Base/Manager';
import { Blueprint } from '../type';
import * as X6 from '@antv/x6';
import { TTest } from '@/Core/Decorators/TTest';

import { Start } from '../Actor/Start';
import { Actor } from '../Base/Actor';

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
        this.graph.on('edge:added', (e) => {
            e.edge.connector = {
                name: 'smooth'
            };
            e.edge.setAttrs({
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
            //@ts-ignore
            this.actors.get(e.edge.source.cell)?.OnEdgeAdd(e.edge);
        });
        this.graph.on('edge:change:target', (e) => {
            //@ts-ignore
            if (e.current.cell) {
                //@ts-ignore
                this.actors.get(e.edge.source.cell)?.OnEdgeLinkTargetChange(e.edge);
            }
        });

        this.graph.on('edge:change:router', () => {
            console.log('DSADAS');
        });
    }

    public override Destroy() {
        super.Destroy();
        this.graph.dispose();
    }

    @TTest.BindFunction<Graph>((instance) => `Shape`)
    private AddCustomShape() {
        const n = new Start(this.ctx);
    }

    public Add(actor: Actor) {
        this.actors.set(actor.body.id, actor);
    }

    public Remove(actor: Actor) {
        this.actors.delete(actor.body.id);
    }
}

export { Graph };
