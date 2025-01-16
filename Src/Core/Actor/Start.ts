import { Edge } from '@antv/x6';
import { Actor } from '../Base/Actor';
import { Blueprint } from '../type';

class Start extends Actor {
    constructor(ctx: Blueprint.Context, options: Blueprint.Actor.IStart = {}) {
        super(ctx, options);
        this.Create();
    }

    public get O() {
        return this.options as Blueprint.Actor.IStart;
    }

    private Create() {
        this.body = this.ctx.Graph.graph.addNode({
            shape: 'Start',
            x: ~~(Math.random() * 100),
            y: ~~(Math.random() * 100),
            width: 180,
            height: 60,
            ports: {
                groups: {
                    output: {
                        attrs: {
                            circle: {
                                r: 6,
                                magnet: true,
                                stroke: '#dddddd',
                                strokeWidth: 2,
                                fill: '#2b7ea5'
                            },
                            text: {
                                fontSize: 14,
                                fill: '#80dd80'
                            }
                        },
                        position: {
                            name: 'absolute'
                        }
                    }
                },
                items: [
                    {
                        id: 'start',
                        group: 'output',
                        args: { x: 160, y: 45 },
                        attrs: {
                            text: { text: '开始' }
                        }
                    }
                ]
            }
        });
        this.ctx.Graph.Add(this);
    }

    public override Destroy(): void {
        super.Destroy();
        this.body.dispose();
    }

    public override OnEdgeAdd(e: Edge) {
        super.OnEdgeAdd(e);
        this.startEdges.set(e.id, e);
    }

    public override OnEdgeLinkTargetChange(e: Edge) {
        console.log('A');
    }
}

export { Start };
