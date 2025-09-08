#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# The environment to switch to (e.g., development, production) passed as an argument.
ENV=$1

# Check if an environment argument was provided.
if [ -z "$ENV" ]; then
    echo "Error: No environment specified."
    echo "Usage: $0 [development|production]"
    exit 1
fi

# The root directory of the application.
APP_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." >/dev/null 2>&1 && pwd )"

# The source file from the 'env' directory.
SOURCE_FILE="$APP_DIR/env/.env.$ENV"

# The target '.env' file at the project root.
TARGET_FILE="$APP_DIR/.env"

# Check if the source environment file exists.
if [ ! -f "$SOURCE_FILE" ]; then
    echo "Error: Environment config file not found at $SOURCE_FILE"
    exit 1
fi

# Remove the old .env file if it exists to ensure a clean state.
if [ -f "$TARGET_FILE" ]; then
    rm "$TARGET_FILE"
fi

# Copy the selected environment file to the root '.env' file.
cp "$SOURCE_FILE" "$TARGET_FILE"

echo "Successfully switched to '$ENV' environment."
