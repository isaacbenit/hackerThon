import { useEffect, useRef } from "react";
import Graph from "graphology";
import Sigma from "sigma";
import circular from "graphology-layout/circular";

export default function App() {
  const container = useRef(null);

  useEffect(() => {
    if (!container.current) return;

    const graph = new Graph();
    graph.addNode("1", { label: "Node 1", size: 10, color: "blue" });
    graph.addNode("2", { label: "Node 2", size: 15, color: "red" });
    graph.addEdge("1", "2");

    
    circular.assign(graph);

    const sigma = new Sigma(graph, container.current);
    sigma.getCamera().animatedReset({ duration: 300 });

    return () => sigma.kill();
  }, []);

  return <div ref={container} style={{ width: "100%", height: "100vh" }} />;
}