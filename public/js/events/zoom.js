/* Commands */

/*--
Interface Command {
  public void   constructor(JSXGraph board, Object Arguments)
  public void   remove()
  public object execute()
}
--*/

var zoomIn = function(board, args) {
  this.remove = function() {
    board.zoomOut();
  };
  this.execute = function() {
    board.zoomIn();
  }
  return args;
};

var zoomOut = function(board, args) {
  this.remove = function() {
    board.zoomIn();
  };
  this.execute = function() {
    board.zoomOut();
  };
  return args;
};

var zoom100 = function(board, args) {
  this.X = board.zoomX;
  this.Y = board.zoomY;
  this.remove = function() {
  };
  this.execute = function() {
    board.zoom100();
  };
  return args;
};

module.exports = {
  zoomIn: zoomIn,
  zoomOut: zoomOut,
  zoom100: zoom100
};