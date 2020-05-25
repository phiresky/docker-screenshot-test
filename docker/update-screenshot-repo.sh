#!/bin/bash
set -ue

dir="$SCREENSHOT_REPO_DIR/run-$RUN_ID"
mkdir -p "$dir"


for f in "$DOCKER_OUTPUT_DIR/screenshots/"*; do
    cp "$f" "$dir/"
    fname="$(basename "$f")"
    echo -e "## $fname\n\n![$fname]($fname)\n" >> "$dir/README.md"
done

cd "$SCREENSHOT_REPO_DIR"
git add --all
git commit -m"add run $RUN_ID"
git push