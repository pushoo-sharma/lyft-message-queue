#!/bin/bash

# Set the number of times to run the script
TIMES_TO_RUN=100

# Set the path to your Node.js script
SCRIPT_PATH="../producer.js"

# Loop to run the script multiple times
for ((i=1; i<=$TIMES_TO_RUN; i++)); do
    echo "Running script iteration $i"
    node "$SCRIPT_PATH"
    sleep 1  # Sleep for 1 second
done
