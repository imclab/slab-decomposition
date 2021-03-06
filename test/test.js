"use strict"

var tape = require("tape")
var slabDecomposition = require("../slabs.js")

tape("slab decomposition", function(t) {

  var segments = [
    [ [0,0], [1,0] ],
    [ [0.5,1], [2.0, 1] ],
    [ [2,1], [3,0] ],
    [ [0,1], [0, 10] ],
    [ [0,-2], [0, -10] ] ]

  var slab = slabDecomposition(segments)

  t.equals(slab.castUp([0.2, -1]), 0)
  t.equals(slab.castUp([0.7, -1]), 0)
  t.equals(slab.castUp([0.7, 0.1]), 1)
  t.equals(slab.castUp([0,0.5]), 3)
  t.equals(slab.castUp([0,-3]), 4)
  t.equals(slab.castUp([0,-20]), 4)
  t.equals(slab.castUp([0,100]), -1)


  t.end()
})