#!/bin/bash

# Waati AI Development Server Startup Script
# This script ensures stable localhost development environment

echo "🚀 Starting Waati AI Development Server..."

# Kill any existing Node processes on port 3000
echo "🔧 Cleaning up existing processes..."
lsof -ti:3000 | xargs kill -9 2>/dev/null || true
pkill -f react-scripts 2>/dev/null || true

# Wait for cleanup
sleep 2

# Clear React Scripts cache to prevent issues
echo "🧹 Clearing React cache..."
rm -rf node_modules/.cache 2>/dev/null || true

# Set Node options for better memory management
export NODE_OPTIONS="--max_old_space_size=4096"
export BROWSER=none
export GENERATE_SOURCEMAP=false

# Start the development server with error handling
echo "🌟 Launching development server..."
echo "📱 Access at: http://localhost:3000"
echo "🛑 Press Ctrl+C to stop"
echo ""

npm start

# If server stops unexpectedly, show diagnostic info
if [ $? -ne 0 ]; then
    echo ""
    echo "❌ Development server stopped unexpectedly"
    echo "🔍 Checking for issues..."
    echo ""
    
    # Check for port conflicts
    if lsof -i:3000 > /dev/null 2>&1; then
        echo "⚠️  Port 3000 is still in use"
        lsof -i:3000
    fi
    
    echo ""
    echo "💡 Try running this script again to restart"
fi