Blockly.JavaScript['robot_move'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'move();\n';
  return code;
};

Blockly.JavaScript['robot_turn'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  // TODO: Assemble JavaScript into code variable.
  var code = "turn(" + dropdown_direction + ');\n';
  return code;
};