Blockly.defineBlocksWithJsonArray(  // BEGIN JSON EXTRACT
    [{
        "type": "robot_move",
        "message0": "move forward",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 0,
        "tooltip": "Moves the player forward one tile.",
        "helpUrl": ""
    },
     {
         "type": "robot_turn",
         "message0": "turn %1",
         "args0": [
             {
                 "type": "field_dropdown",
                 "name": "direction",
                 "options": [
                     [
                         "right ↻",
                         "RIGHT"
                     ],
                     [
                         "left ↺",
                         "LEFT"
                     ]
                 ]
             }
         ],
         "previousStatement": null,
         "nextStatement": null,
         "colour": 0,
         "tooltip": "Turns the player 90 degrees.",
         "helpUrl": ""
     }]
);