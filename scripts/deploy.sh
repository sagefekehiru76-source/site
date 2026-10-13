#!/usr/bin/env bash
# Build the site and upload it to the hosting over SSH (rsync).
# Run from the project folder on your own computer:
#
#   DEPLOY_HOST=… DEPLOY_PORT=… DEPLOY_USER=… DEPLOY_PATH=domains/YOUR-DOMAIN/public_html ./scripts/deploy.sh
#
# ssh will ask for the password (it is never stored here). Better: set up an SSH key
# in the hosting panel and use that instead of a password.
set -euo pipefail

HOST="${DEPLOY_HOST:?Set DEPLOY_HOST (server IP)}"
PORT="${DEPLOY_PORT:-22}"
USER_NAME="${DEPLOY_USER:?Set DEPLOY_USER (SSH login)}"
REMOTE_PATH="${DEPLOY_PATH:?Set DEPLOY_PATH, e.g. domains/launchonnato.com/public_html}"

npm run build
# --delete removes files on the server that are no longer in dist/ (only inside REMOTE_PATH)
rsync -avz --delete -e "ssh -p ${PORT}" dist/ "${USER_NAME}@${HOST}:${REMOTE_PATH}/"
echo "Deployed to ${USER_NAME}@${HOST}:${REMOTE_PATH}"
