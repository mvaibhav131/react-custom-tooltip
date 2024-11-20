import Tooltip from './component/tooltip/tooltip'

function App() {

  return (
    <>
      <div className="button-demo">
      <h1 style={{textAlign:'center'}}>React Tooltip Demo</h1>

      <div className="button-group">
        <Tooltip title="This is a Top Position" position="top">
          <button className="btn">Top</button>
        </Tooltip>

        <Tooltip title="This is a TopLeft Position" position="topLeft">
          <button className="btn">Top Left</button>
        </Tooltip>

        <Tooltip title="This is a Bottom Position" position="bottom">
          <button className="btn">Bottom</button>
        </Tooltip>

        <Tooltip title="This is a BottomLeft Position" position="bottomLeft">
          <button className="btn">Bottom Left</button>
        </Tooltip>

        <Tooltip title="This is a Left Position" position="left">
          <button className="btn">Left</button>
        </Tooltip>

        <Tooltip title="This is a Right Position" position="right">
          <button className="btn">Right</button>
        </Tooltip>

        <Tooltip title="This is a Bottom Right Position" position="bottomRight">
          <button className="btn">Bottom Right</button>
        </Tooltip>

        <Tooltip title="This is a Top Right Position" position="topRight">
          <button className="btn">Top Right</button>
        </Tooltip>
      </div>
    </div>
    </>
  )
}

export default App
