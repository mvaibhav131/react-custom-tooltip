import './App.css'
import Tooltip from './component/tooltip/tooltip'

function App() {

  return (
    <>
      <div className="button-demo">
      <h1>React Tooltip Demo</h1>

      <div className="button-group">
        <Tooltip title="This is a Primary Button" position="top">
          <button className="btn btn-primary">Top</button>
        </Tooltip>

        <Tooltip title="This is a Secondary Button" position="topLeft">
          <button className="btn btn-secondary">Top Left</button>
        </Tooltip>

        <Tooltip title="This is a Danger Button" position="bottom">
          <button className="btn btn-danger">Bottom</button>
        </Tooltip>

        <Tooltip title="This is a Success Button" position="bottomLeft">
          <button className="btn btn-success">Bottom Left</button>
        </Tooltip>

        <Tooltip title="This is a Warning Button" position="left">
          <button className="btn btn-warning">Left</button>
        </Tooltip>

        <Tooltip title="This is a Info Button" position="right">
          <button className="btn btn-info">Right</button>
        </Tooltip>

        <Tooltip title="This is a Light Button" position="bottomRight">
          <button className="btn btn-light">Bottom Right</button>
        </Tooltip>

        <Tooltip title="This is a Dark Button" position="topRight">
          <button className="btn btn-dark">Top Right</button>
        </Tooltip>
      </div>
    </div>
    </>
  )
}

export default App
