class TSMS {
  constructor(graph) {
    this.graph = graph
  }

  run() {
    let greedyPath = []
    let visited = [0]
    let origin = 0

    for (let i = 0; i < this.graph.length; i++) {
      let nearestDestination = 0;
      for (let j = 0; j < this.graph.length; j++) {
        if (!visited.includes(j)) {
          // console.log("===========")
          // console.log("ORIGIN J: ", this.graph[origin][j])
          // console.log("ORIGIN J (DISTANCE): ", this.graph[origin][j].distance)
          // console.log("ORIGIN: ", origin)
          // console.log("J: ", j)
          // console.log("===========")
          if(this.graph[origin][nearestDestination].distance > this.graph[origin][j].distance);
            nearestDestination = j;
        }
      }

      greedyPath.push(this.graph[origin][nearestDestination])
      origin = nearestDestination;
      visited.push(origin);
    }
    console.log("RESULTS: ", greedyPath)

    return greedyPath;
  }

}

export default TSMS;