import ReactFlow, {
  Background,
  Controls,
  type Node,
  type Edge,
  type OnConnect,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";

import { useCallback } from "react";
import PipelineNode from "./PipelineNode";

// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
const nodeTypes = { processor: PipelineNode };
const fitViewOptions = {
  padding: 3,
};

interface PipelineTopologyDisplayProps {
  initialNodes: Node[];
  initialEdges: Edge[];
}

export const PipelineTopologyDisplay = (
  props: PipelineTopologyDisplayProps,
) => {
  const { initialNodes, initialEdges } = props;
  const [nodes, , onNodesChange] = useNodesState<Node[]>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge[]>(initialEdges);
  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges],
  );
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitViewOptions={fitViewOptions}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};