Blockly.JavaScript['robot_move'] = function(block) {
  var code = 'move();\n';
  return code;
};

Blockly.JavaScript['robot_turn'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  var code = 'turn("' + dropdown_direction + '");\n';
  return code;
};