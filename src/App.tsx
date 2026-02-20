import "@xyflow/react/dist/style.css";

import { useCallback, useState } from "react";
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  Background,
  Controls,
} from "@xyflow/react";

import Header from "./components/header";
import Sidebar from "./components/sidebar";

const initialNodes = [
  { id: "n1", position: { x: 0, y: 0 }, data: { label: "Node 1" } },
  { id: "n2", position: { x: 0, y: 100 }, data: { label: "Node 2" } },
];
const initialEdges = [{ id: "n1-n2", source: "n1", target: "n2" }];

function App() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) =>
      setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes) =>
      setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  );
  const onConnect = useCallback(
    (params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    [],
  );

  return (
    <div className="h-screen w-full overflow-hidden flex">
      <Sidebar />
      <div className="h-full flex flex-col flex-1">
        <Header />
        <main className="flex-1 h-[calc(100vh-56px)]">
          <ReactFlow
          // nodes={nodes}
          // edges={edges}
          // onNodesChange={onNodesChange}
          // onEdgesChange={onEdgesChange}
          // onConnect={onConnect}
          // fitView
          >
            <Background />

            <Controls />
          </ReactFlow>
        </main>
      </div>
    </div>
  );
}

export default App;
